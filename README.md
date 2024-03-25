# WaveZync NextJS TailwindCSS StarterKit 🌊

This is a starter kit for NextJS with TailwindCSS. It includes a basic setup for a NextJS project with TailwindCSS and some common components and utilities.

## Installation 🚀

1. You need NodeJS 20+ installed on your machine.
2. You also need to install [PNPM package manager](https://pnpm.io/installation).
3. Run `pnpm install` to install the dependencies.
4. Copy the `.env.example` file to `.env` and add the required environment variables.
5. Run `pnpm dev` to start the development server.

## Preparing VSCode 🤖

There are recommended extensions for VSCode that you can install to make development easier. You can find the recommended extensions in the `.vscode/extensions.json` file.

VSCode will prompt you to install the recommended extensions when you open the project. You can also install them manually by clicking on the `Install All` button in the prompt.

## Storybook 📚

We are using Storybook for building and testing components in isolation. To run Storybook, run `pnpm storybook`.

## React Query 🎁

Please follow the key factory pattern for the query keys. This will help in maintaining the cache. For more information, check the [TkDodo's Blog](https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories).

## Installed Packages 📦

- **[tanstack/query:](https://tanstack.com/query)** For data fetching and caching. Check the query key pattern to maintain the cache.
- **[axios:](https://axios-http.com/docs/intro)** For making API requests.
- **[react-hook-form:](https://react-hook-form.com/)** For form handling.
- **[tailwindcss:](https://tailwindcss.com/)** For styling.
- **[Radix UI:](https://www.radix-ui.com/)** For building accessible UI components.
- **[Storybook:](https://storybook.js.org/)** For building and testing components in isolation.

## Folder Structure 📁

```bash
.
├── bin # Scripts
├── public # Static files
└── src # Source code
    ├── @types # Typescript types
    ├── components # Reusable components
    │   ├── home # example Home page components(add more component folders as needed)
    │   └── ui # UI components
    │       ├── Button
    │       ├── Forms
    │       │   └── FormAlert
    │       └── Input
    ├── contexts # React Contexts and Providers with hooks
    ├── hooks # Custom hooks
    ├── layouts # Page layouts
    ├── lib # Utility functions
    │   ├── api # API functions
    │   │   ├── @types # API types
    │   │   └── products # Example API
    │   │       └── hooks # API hooks with React Query
    │   └── common # Common types and functions
    ├── pages # NextJS pages
    ├── styles # TailwindCSS styles
    └── utils # Utility functions
```

## Favicons 🌟

Use [https://realfavicongenerator.net/](https://realfavicongenerator.net/) to generate favicons and add them to the `public` folder.
