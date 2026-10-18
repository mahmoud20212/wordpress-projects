# wpAcademy

## Project Overview

wpAcademy is a WordPress theme designed for educational websites, online academies, and learning-focused content. It extends Underscores with academy layouts, dashboard functionality, widgets, custom fonts, and dedicated styling.

## Technologies

- WordPress and PHP
- JavaScript
- CSS and Sass/SCSS
- Composer and npm
- WooCommerce integration support
- Jetpack Infinite Scroll support

## Project Structure

- academy/: academy-specific layouts and styles.
- dashboard.php: academy dashboard template.
- wpacademy_widget.php: custom academy widget.
- inc/ and template-parts/: theme functions and reusable templates.
- sass/: source Sass files.
- js/: navigation, Customizer, administration, and academy scripts.
- fonts/: bundled Noto Kufi Arabic font files.
- languages/: translation resources.

## Setup and Usage

1. Copy the theme to wp-content/themes/wpacademy.
2. Install dependencies with npm install and composer install.
3. Activate wpAcademy from Appearance > Themes.
4. Configure menus, widgets, pages, and academy dashboard content.

## Features

- Academy-oriented page layouts.
- Custom dashboard and widget support.
- Responsive styling with RTL support.
- Bundled Arabic-friendly typography.
- Translation-ready architecture.
- Optional WooCommerce and Jetpack compatibility.

## Development Commands

~~~bash
npm run compile:css
npm run compile:rtl
npm run lint:js
npm run lint:scss
composer lint:php
composer lint:wpcs
~~~

Use npm run watch for continuous Sass compilation and composer make-pot to generate translations.

## License

GPLv2 or later. See LICENSE.

