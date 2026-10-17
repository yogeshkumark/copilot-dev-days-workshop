# AGENTS.md

This repo is a small static web app for a Copilot workshop. Keep instructions concise and grounded in the actual project structure.

## Project snapshot

- App code lives in [src](src/), with the UI entry at [src/index.html](src/index.html) and logic in [src/app.js](src/app.js), [src/questions.js](src/questions.js), and [src/quiz.js](src/quiz.js).
- Tests live in [tests](tests/), and the suite is intentionally small and fast.
- The workshop documentation is in [README.md](README.md) and [workshops](workshops/).
- This is a plain HTML/CSS/JS project with no build system, framework, or dependency install step.

## Commands

- Run the test suite: `npm test`
- Run the app locally: `npm start`

`npm start` serves the app from the `src` folder on port 8080 using `http-server`.

## Working conventions

- Prefer small, targeted changes that match the existing JS style.
- Keep the app static and dependency-light; do not introduce a framework or bundler unless the task explicitly requires it.
- Preserve the quiz data shape in [src/questions.js](src/questions.js) and any assumptions in the tests.
- Prefer readable, minimal code over large refactors.
- When fixing a bug or adding a feature, add or update tests in [tests](tests/) when behavior is affected.
- Do not duplicate large project docs in code comments or instructions; link to [README.md](README.md) and the workshop docs instead.

## Before finishing

- Run `npm test` for any behavior change, bug fix, or refactor.
- Keep summaries brief and repo-specific.
- If the task involves a new workflow, explain the relevant files and commands without restating basic setup from the workshop docs.
