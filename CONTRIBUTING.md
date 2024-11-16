Contributing to Sportmagic
Thank you for considering contributing to Sportmagic! We appreciate your time and effort in helping improve the project. To ensure smooth collaboration, please follow these guidelines:

Getting Started
1. Fork the Repository
Navigate to the Sportmagic repository.
Click on the Fork button in the top-right corner to create your own copy of the repository.
2. Clone Your Fork
Clone your forked repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/sportmagic.git
3. Add the Upstream Remote
To stay updated with the main repository:

bash
Copy code
git remote add upstream https://github.com/josenpuleo/sportmagic.git
Branching Guidelines
Use Specific Branches:

For updates to the sportmagic.app site, use the site-app branch.
For updates to the sportmagic.org site, use the site-org branch.
For new features or bug fixes, create a new branch based on the branch you’re contributing to:
bash
Copy code
git checkout -b feature/your-feature-name site-app
Branch Naming Convention:

Features: feature/your-feature-name
Bug Fixes: fix/issue-name
Documentation: docs/update-section
Keep Your Branch Updated: Periodically pull the latest changes from the upstream branch to avoid conflicts:

bash
Copy code
git pull upstream site-app
Making Changes
Ensure your code follows the project's coding standards:

Use consistent indentation and follow the existing style in the project.
Ensure your code is clean and readable.
Run tests (if applicable) before submitting your code to ensure functionality remains intact.

If modifying or adding features, ensure:

Proper documentation is updated (e.g., in the README.md or other relevant files).
New features are tested, and edge cases are handled.
Commit your changes:

Write descriptive commit messages:
bash
Copy code
git commit -m "Add feature to show wallet balances on Polygon chain"
Submitting a Pull Request
Push your changes to your fork:

bash
Copy code
git push origin feature/your-feature-name
Open a Pull Request (PR) on the main repository:

Provide a detailed description of your changes.
Link any relevant issues (e.g., fixes for bugs or enhancement requests).
Ensure your PR meets the following criteria:

All tests pass.
Code is reviewed and approved by at least one maintainer.
Changes align with the project's goals and standards.
Be patient while your PR is reviewed.

Reporting Issues
Check Existing Issues:

Before opening a new issue, check the Issues tab to see if it has already been reported.
Provide Detailed Information:

Describe the issue clearly.
Include steps to reproduce the issue (if applicable).
Mention the branch or version where the issue occurred.
Label the Issue:

Add appropriate labels (e.g., bug, feature request) to help maintainers triage it.
Security Issues
If you find a security vulnerability, please report it responsibly:

Do NOT disclose it publicly.
Contact the maintainers directly at: [info@sportmagic.org]
Provide detailed information so the issue can be resolved quickly.
Thank You!
We value all contributions and thank you for improving Sportmagic. Together, we can make this project even better!
