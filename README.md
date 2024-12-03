# Lit Starter Kit

Welcome to the Lit Starter Kit. This is not an official kit for the Lit library, but this is a tool to get a component library up and running quickly.

## Getting Started

You can choose to fork this repository directly or you can run the following command to create a new project.

```bash
npm init lit-starter-kit your-project-name
```

### Creating a New Component

This project leverages [plop](https://www.npmjs.com/package/plop) to generate new components in your library. You can create a new component by running the following command and following the prompts.

```bash
npm run new
```

## Running the Code

The development environment uses [Storybook](https://storybook.js.org/) to showcase and document the components. The documentation files are written in MDX files to increase portability in case you wan to use a different tool for documenting your components.

```bash
npm run dev
```

## Building the Project

Generating the final build assets will generate the `dist` assets for the NPM package, the content for the CDN located in the `cdn` directory at the root of the project, as well as the meta content for your components like framework integrations like types and react wrappers.

```bash
npm run build
```