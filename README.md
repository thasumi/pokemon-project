#  Pokémon Project - Pokédex

This project was developed with the intent to look up and display the existing Pokemon that are registered in the database available through
the Pokemon API: https://pokeapi.co/docs/v2#pokemon.
The application was divided in two pages:
 - Main page, where there is a search field and a section where 10 Pokemon are displayed in crescent order based on their IDs.
 - Details page, where more information related to a specific Pokemon is displayed. This page is accessible when you search for Pokemon and the
   search is successful, or whenever you click a Pokemon in the main page. In this same page it's also possible to search for Pokemon.

:iphone: This application is responsive and supports mobile devices.

# :computer: Technologies
- Angular v15.0
- node v18.12.1;
- SCSS;
- TypeScript;

# :books: Resources Used
- ngx-spinner - documentation: https://www.npmjs.com/package/ngx-spinner                
- ngx-infinite-scroll - documentation: https://www.npmjs.com/package/ngx-infinite-scroll
- ngx-translate - documentation: https://github.com/ngx-translate/core

# :wrench: Environment Configuration:
- Clone the repository
- Install the dependencies by running npm install
- Run ng serve command to initialize the application
- Open the browser and navigate to http://localhost:4200

# :hammer: Project Features:

-  `Pokemon search`: When typing the name of a Pokemon and clicking the search button, you will be redirected to the details page related to that Pokemon.
  If the Pokemon is not found, a message will be displayed below the search field. If the Pokemon has blank spaces in it's name, utilize a dash ("-"). The name
  of the Pokemon has to match fully, partial names do not work.

-  `Pokemon display`: There is a section where Pokemon are displayed and are ordered by ID. 10 are displayed at once when using desktop screen sizes, and 
  5 are displayed when in mobile screen sizes. In the desktop version, when clicking the arrow buttons to the left and right of the Pokemon, it will display
  the previous and the next 10 Pokemon, respectively. In the mobile version, to load 5 more Pokemon, simply scroll down to the end of the page. This will
  keep loading the next 5 Pokemon every time it's performed.

 - In the Pokemon cards, it is displayed the names, ID, weight, height and an image of the Pokemon.

-  `Translations`: The application possesses a translation services for Portuguese and English. To switch languages, click either of the flags located at the top
  right of the screen.

# 📁 Architecture:
  This application was developed with lazy loading, so it can easily accomodate more modules and features in the future, as well as having faster loading times
  and lighter bundles.
  The following modules exist:
 - Main-Page: module of the main page,  that utilizes other  reusable components inside.
 - Details-Page: module of the details page, that also utilizes the search component.
 - Navigate: module with navigation components, like the header and footer.
-  Shared: module with reusable components, which includes the Pokemon cards and the search field.

The project also contains an assets folder, where the used images are stored, and the i18n folder, with the translation files.

With these components and modules separated, it becomes easier to scale the application for more features and new pages.

# 🔐 Access to the project:
The project has a configuration to run inside a Docker container. To copy the image run the following command:
`ADD file:9a4f77dfaba7fd2aa78186e4ef0e7486ad55101cefc1fabbc1b385601bb38920 in / `
