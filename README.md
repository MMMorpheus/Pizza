# Pizza
This is a client part of e-commerce app.
Tech stack:
1. TypeScript
2. React.js => main UI framework
3. SCSS/modules and clsx(parsing classnames due to diff conditons into one string) => stylesheets
4. React-Router-Dom/qs => client-side routing / handling query params
4. Redux Toolkit && asyncThunk => global app state and a little part of using local storage
5. Axios => for server requests
8. React Content Loader => product skeletons while app status is "loading"
9. Some little helpers like uuid generator, debounced input etc.

At the moment backend is represented by Mockapi.io

Features owerview: 
1. Client side routing
2. Dynamic product cards render
3. Global app state represented by Redux Toolkit
4. Parsing otions to query params in order to be able to share link
5. Saving previous query params to Redux after page reload in oirder to save filters
6. Saving items to localStorage in order to save state after page reload
7. Full responsive layout

Goals:
1. Create backend =)
