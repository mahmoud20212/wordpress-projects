# akhbar

## Project Overview

akhbar is a WordPress news theme based on the Underscores starter theme. It provides structured templates for articles, videos, and opinion content, with responsive layouts, RTL support, and translation readiness.

## Technologies

- WordPress and PHP
- JavaScript
- CSS and Sass/SCSS
- Composer and npm
- WooCommerce integration support
- Jetpack Infinite Scroll support

## Project Structure

- inc/: theme setup, Customizer integration, template tags, and helper functions.
- template-parts/: reusable content templates.
- single-video.php and archive-video.php: video templates.
- single-opinion.php and archive-opinion.php: opinion templates.
- css/, style.css, and style-rtl.css: theme styles.
- js/: navigation and customization scripts.
- languages/: translation resources.

## Setup and Usage

1. Copy the theme to wp-content/themes/akhbar.
2. Install dependencies with npm install and composer install.
3. Activate akhbar from Appearance > Themes.
4. Configure menus, logo, featured images, widgets, and content types.

## Features

- News and editorial content templates.
- Dedicated video and opinion archives.
- RTL stylesheet support.
- Translation-ready architecture.
- Optional WooCommerce and Jetpack compatibility.
- WordPress Customizer integration.

## Development Commands

~~~bash
npm run compile:css
npm run compile:rtl
npm run lint:js
npm run lint:scss
composer lint:php
composer lint:wpcs
~~~

Use npm run watch for live Sass compilation and composer make-pot to generate translation files with WP-CLI.

## License

GPLv2 or later. See LICENSE.

