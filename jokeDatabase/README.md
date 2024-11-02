## An elevator pitch of your project (something you can say in less than 1 minute
This will be a joke database. Users can create a joke. Users can go to a page and get a random joke of the day (I want that to be the landing page, in a way, where you are greeted with a joke.

## The names of the contributors (if you are working with a partner)
Just me

## A rough list of features (this needs to be large enough to satisfy the "scope" requirements)
- Joke generator (pulls from the database)
- Add a joke
  - (because we track author, uses authentication/authorization if you want your joke attributed to you)
- View all jokes
- Search for a joke. This will search the database of all the jokes, filtering by whatever word you put in, whatever author you put, etc.
- Author Selection page
  - This will show all the different authors, and you have to click on them to see their jokes
- Jokes submitted by the aforementioned author.
- Edit/delete a joke you previously submitted 
- Submit a request to edit another user’s joke. (perhaps the author had a typo)
- Review requests for edit on your joke, and approve or deny them.


## A list of new things you will need to do to accomplish your project (e.g. websockets)
Not new to the class, but things i still feel shaky on that are not technically new
- authorization/authentication (determining the current user, syncing them with the db, etc)
- Toasts
- Reusable layout components







<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
``` -->
