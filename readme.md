# rayco.digital

This showcases my portfolio site built with Craft CMS.
Final product can be found at [https://rayco.digital](https://rayco.digital)

## Technologies

- Craft CMS
    - Twig templating
    - MySQL
- SCSS
- NPM Gulp
- ES6 JavaScript
- GSAP

## Installation

Run this project in a development environment. I use Laragon.
Configure the .env file to your needs and remove the `.example`.
Open the browser and go to <siteaddress>/admin/install to run the Craft CMS installation.

Then run in order:
```bash
composer install
php craft migrate/up
npm install
```

## Gulp commands

```bash
gulp style #Runs the Gulp pipeline once
gulp watch #Runs the Gulp pipeline on change for twig and scss changes.
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
 