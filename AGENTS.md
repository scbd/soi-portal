# AGENTS.md - House rules for `scbd/soi-portal`

This file provides guidance to AI coding agents (Claude Code, Codex, etc.) when working with code in this repository.

- **Last reviewed:** 2026-11-18
- **Next review:** 2027-11-18 - re-check against the current version of the
  [SCBD Software Development Standards](https://github.com/scbd/documentation/blob/master/devops/software-development-standards.md)
  (this file was aligned with v0.3, 2026-06-08) and update the commands, stack and rules below.

## About this project

Public website of the **Sustainable Ocean Initiative (SOI)**. It is a mostly static content site: most
changes are text, image and link updates in `app/views/`. Keep changes minimal and surgical.

### Stack

Legacy **AngularJS 1.3** (via `angular-flex`) loaded with **RequireJS**, served by a small **Express** server.
Front-end libraries come from **Bower** (`bower.json`) and are installed into `app/libs/` (gitignored).
The Docker image runs on **Node 26** (`node:26-alpine`); `engines.node` requires a release patched for CVE-2026-111497.

| Path                              | Purpose                                                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `server.js`                       | Express server: serves `app_build/` then `app/` under `/app`, renders `app/template.ejs` for every other path (SPA fallback) |
| `app/template.ejs`                | Page shell (header, menu, footer); sets `<base href>` and loads RequireJS                                                    |
| `app/boot.js`                     | RequireJS config (library paths/shims) and Angular bootstrap                                                                 |
| `app/routes.js`                   | All client-side routes                                                                                                       |
| `app/template.js`                 | `TemplateController`: shell logic and the `siteMap` used for breadcrumbs                                                     |
| `app/providers/extended-route.js` | Wraps `$routeProvider` to lazy-load per-view controllers                                                                     |
| `app/views/<section>/<page>.html` | Page content; optional `<page>.js` controller next to it                                                                     |

## Commands

There is no build step or linter in this repo. `npm test` runs `node:test` smoke tests (`test/`) that start the
server and check the main pages, static assets and Node version.

```sh
npm install          # postinstall runs `bower install` into app/libs/
npm start            # node server - http://localhost:8000/
npm test             # smoke tests (needs `npm install` first for app/libs/)
```

| Env var     | Default | Purpose                                                                           |
| ----------- | ------- | --------------------------------------------------------------------------------- |
| `PORT`      | `8000`  | HTTP port                                                                         |
| `BASE_PATH` | `/`     | Mount path; if unset, the `base_url` request header is used (a warning is logged) |

Docker (same as CI):

```sh
docker build -t soi-portal --build-arg VERSION=$(git rev-parse HEAD) .
docker run -p 8000:8000 soi-portal
```

## Architecture notes

- **Adding a page** takes up to three edits: a `when(...)` entry in `app/routes.js`, the view file(s) in
  `app/views/`, and an entry in the `siteMap` in `app/template.js` so the breadcrumb resolves.
  Top-level menu links live in `app/template.ejs`.
- **Route controllers** (`extended-route.js`): `resolveController: true` loads the AMD module with the same
  path as `templateUrl` minus `.html` (e.g. `views/events/index.js`); a string loads that module;
  `false` means the page is static HTML with no controller.
- Controllers are AMD modules: `define(['app', ...], function (app) { app.controller(...) })`.
- `html5Mode` is on, so every non-`/app/*` path must fall through to `template.ejs` on the server.
  Unknown client routes redirect to `/help/404`.
- `services/authentication.js` and the `securize()` helper in `routes.js` exist but no route currently uses them.

## CI/CD

GitHub Actions (`.github/workflows/ci.yml`) builds the Docker image, checks it answers on `/`, and pushes
`scbd/soi-portal` to Docker Hub:

| Trigger                  | Image tag(s)          |
| ------------------------ | --------------------- |
| Push to `master` / `dev` | `<branch>`            |
| Tag `YYYY.WW.patch`      | `<tag>` + `latest`    |
| Any other branch / PR    | built and tested only |

## SCBD standards (applied to this repo)

Source: [Software Development Standards](https://github.com/scbd/documentation/blob/master/devops/software-development-standards.md).
Only the parts that apply to this repo are summarized here.

- **Match the existing code style** of the file you edit (AngularJS 1.x / ES5 / AMD). Do not convert legacy
  code to TypeScript, Vue or a newer style unless the ticket asks for it.
- **Naming:** camelCase variables, functions and parameters; PascalCase classes/controllers;
  UPPER_SNAKE_CASE constants and env vars; **kebab-case** for new files and directories
  (exceptions: `README.md`, `LICENSE`, `CHANGELOG.md`, `AGENTS.md`). Booleans use `is`/`has`, positive form.
- **Functions:** `get*` returns or throws, `find*` returns the record or `null`, `search*`/`list*` return
  an array. Mandatory params are positional; optional ones go in a destructured `options` object.
  Prefer early returns over nested conditionals.
- **Comments:** minimal, explain "why" not "what"; JSDoc for non-trivial functions.
- **Branches:** `<type>/<ticket-id>-<short-description>` with type `feature`, `bugfix`, `hotfix`, `release`,
  `chore`, `docs`, `test` or `spike` (e.g. `feature/JIRA-123-new-events-page`, `chore/update-dependencies`).
- **Commits:** `(<scope>) <subject>` - imperative, lowercase, no trailing period, max 72 chars.
  Small, atomic, never break the build, no commented-out code or debug statements.
- **Tags / releases:** `<year>.<weekOfYear>.<patch>`, e.g. `2026.47.0`. This is also what CI publishes as `latest`.
- **Workflow:** GitHub Flow on `master`. PRs need passing CI and 2 approvals (1 for docs-only changes or
  hotfixes), at least one from a senior developer; authors don't approve their own PR.
  Squash-merge feature branches, rebase-merge hotfixes, delete the branch after merge.
- **README** must state how to run the project and list required env vars - update it if you change either.

## How we work here

A human decides before code exists. If you (the agent) are about to make a design decision the human
hasn't seen, **stop and surface it** instead of coding past it.

## Guardrails (Karpathy) - always on

**1. Think before coding.** State assumptions explicitly. If multiple interpretations exist, present
them - don't pick silently. If a simpler approach exists, say so. If something's unclear, stop and ask.

**2. Simplicity first.** Minimum code that solves the problem. No features beyond what was asked, no
speculative abstractions, no error handling for impossible cases.

**3. Surgical changes.** Touch only what the ticket needs. Don't "improve" adjacent code, don't
refactor things that aren't broken, match existing style. Remove only the orphans *your* change created;
mention pre-existing dead code, don't delete it.

**4. Goal-driven execution.** Turn the task into a verifiable goal. For multi-step work, state a short
plan with a `verify:` check per step. For content changes here, verify by running the site and loading the page.

Full text: https://github.com/multica-ai/andrej-karpathy-skills/blob/main/skills/karpathy-guidelines/SKILL.md
