# BoiPoka Project

BoiPoka Demo project using React and generated Fake json data. Add to WishList or Read List Options!

- [Live Link](https://progherobp.surge.sh/)

## Surge Blank or 404 Issue Solve :

**Follow below step to resolve :**

-`npm run build` -`cd build` -`cp index.html 200.html` -`surge`

or Replace your build step in package.json (For Windows and Vite Framework used)

-`"build": "vite build && copy dist\\index.html dist\\200.html",`

- And function return changed (Verifying Data Integrity in `localStorage`)

  `return storedList;` to` return Array.isArray(storedList) ? storedList : [];`

-If there is invalid or missing data in localStorage, parsing could fail, leading to issues
