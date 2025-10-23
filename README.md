# dotbase Coding Challenge

## Welcome 👋

Thank you for your interest in joining dotbase! Please take a moment to read through this entire README before starting the challenge.

This short challenge is designed to help us understand how you approach automation, deployment, and monitoring in a real-world setting.
It’s meant to take around 4 hours.

## Getting Started ⚙️

We provide a small GraphQL server that returns a list of sample patients. Imagine it as part of a larger health-tech platform with a frontend and other microservices.

Your goal is to make it deployable and observable.

You can use any stack or tools you like — Kubernetes, Docker, Terraform, Ansible, GitHub Actions, or others — as long as your setup is clear, automated, and easy to repeat.

## Your Task  📋

### 1. Deploy the Application

Choose the toolset and tech stack that you consider most suitable, but take the following considerations into account. Your deployment should be

- automated
- repeatable on the same server but also on others
- configurable for different environments
- traceable who deployed the application when, why and where

### 2. Set Up Monitoring

Since the first task already takes most of the time, we only ask for a concept here, no need to implement a full monitoring setup.

Please think about, how the application could visualize its health and performance, if it were running in a  multi-service environment in production usage. Choose a presentation format you like, it should cover:
- What metrics or signals you would collect
- Which tools or services you would use
- How you would alert or visualize issues

The goal is to show how you think about observability. Sketches or simple diagrams showing what metrics or states you’d present would be useful to see. If you have any thoughts on scalability or reliability, feel free to share.

### Hints and Tips 💡

- Keep it simple.
- Avoid writing too much custom code and lean towards established tools and best practices.

## Submission Guideline 📥

Please fork this repository and provide:

- The code and configuration for your deployment and monitoring setup
- A short README that explains:
	- How to build and run the app locally
	- How to deploy it
	- How to access monitoring or dashboards
	- Any trade-offs or assumptions you made

When you’re done, **create a pull request** into the main branch so that it can be reviewed by us.

## Evaluation Criteria 🤔

- **Implementation**: Do you fulfill the requirements?
- **Code structure and quality**: Is your solution the and code well-organized and easy for others to pick up, extend, or maintain? Does it demonstrate thoughtful design and clear intent?
- **Documentation**: Is it clear what your solution does, how it works and how it is used? In your documentation, do you focus on the key points and strike the right balance of brevity and completeness? Do you explain controversial or unintuitive decisions you made?
- **Pull request description**: Do you create PRs that are easy to review?
- **Commit structure**: Are your commits focused and logically grouped?

We also want to test if you can work independently and research the information you need. That said, if anything seems incorrect, unclear, or is preventing you from moving forward, please don’t hesitate to reach out to us!
