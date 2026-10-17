---
name: add-quiz-questions
description: 'Add new multiple-choice questions to the Dev Days Quiz. Use when asked to add, write or generate quiz questions.'
argument-hint: 'Add a GitHub or Git quiz question with 4 options and a correct answer.'
user-invocable: true
disable-model-invocation: false
---

# Add quiz questions

## When to use
- Add a new multiple-choice question to the workshop quiz
- Update an existing question or correct answer
- Validate that the quiz data still matches the repository rules

## Required data shape
Read [src/questions.js](../../../src/questions.js) and match the object shape exactly: `{ question, options, answer }`.

- Each question has exactly 4 options.
- `answer` is the zero-based index of the correct option.
- Spread correct answers across positions 0-3.
- Avoid “all of the above,” trick wording, or ambiguous phrasing.
- Keep questions factual, verifiable, and under 100 characters.
- Do not duplicate existing questions.

## Project-specific checks
- If the start screen in [src/index.html](../../../src/index.html) mentions a question count, update it.
- Run `npm test` and fix any failures before finishing.

## Procedure
1. Read [src/questions.js](../../../src/questions.js) and inspect the existing `QUESTIONS` array.
2. Add a new object or update an existing one while preserving the exact shape.
3. Write a clear, factual question with four options and the correct zero-based answer.
4. Keep the question unique and relevant to Git, GitHub, or Copilot.
5. Update the start screen question count if it is displayed.
6. Run `npm test` to validate the question data.
7. Fix any failing assertions before finishing.
8. End with a table containing: question, correct answer, and a one-line source or explanation.

## Completion checklist
- Question object shape matches `{ question, options, answer }`
- Exactly 4 options per question
- Correct answer index is valid and spread across positions 0-3
- Question text is unique, factual, and under 100 characters
- Start screen count is updated if needed
- `npm test` passes
