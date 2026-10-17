// Quiz questions.
// "answer" is the index (starting at 0) of the correct option.
const QUESTIONS = [
  {
    question: "Which command creates a new Git branch and switches to it?",
    options: ["git branch -d", "git switch -c", "git merge", "git push -u"],
    answer: 1,
  },
  {
    question: "Which file does GitHub show as a repository's front page?",
    options: ["index.txt", "README.md", "HOME.md", "about.html"],
    answer: 1,
  },
  {
    question: "What does PR stand for on GitHub?",
    options: ["Pull request", "Push release", "Project review", "Public repository"],
    answer: 0,
  },
  {
    question: "In GitHub Copilot, which key accepts an inline suggestion?",
    options: ["Enter", "Esc", "Tab", "Shift"],
    answer: 2,
  },
  {
    question: "Which file gives Copilot custom instructions for a repository?",
    options: [".github/copilot-instructions.md", "copilot.json", ".vscode/ai.txt", "package.json"],
    answer: 0,
  },
  {
    question: "What does `git clone` do?",
    options: [
      "Deletes a repository",
      "Copies a remote repository to your computer",
      "Creates a new branch",
      "Merges two branches",
    ],
    answer: 1,
  },
  {
    question: "What is GitHub Actions?",
    options: [
      "A code editor for GitHub",
      "A CI/CD automation platform built into GitHub",
      "A GitHub repository template",
      "A branch protection rule",
    ],
    answer: 1,
  },
  {
    question: "Which file defines a workflow for GitHub Actions?",
    options: [
      ".github/workflows/main.yml",
      "workflow.json",
      ".gitignore",
      "README.md",
    ],
    answer: 0,
  },
  {
    question: "What does a GitHub Actions workflow typically run on?",
    options: [
      "A local desktop app",
      "A GitHub-hosted runner",
      "A SQL database",
      "A static HTML file",
    ],
    answer: 1,
  },
];

// Lets Node.js tests load this file. Browsers ignore this block.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTIONS };
}
