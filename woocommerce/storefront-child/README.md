# Storefront Child

## Project Overview

Storefront Child is a WooCommerce child theme built on Storefront. It customizes shop layout, checkout behavior, product presentation, footer output, and product types without modifying the parent theme directly.

## Technologies

- WordPress and PHP
- WooCommerce
- Storefront parent theme
- JavaScript/jQuery and CSS
- WordPress hooks, filters, and translation functions

## Setup and Usage

1. Install and activate the Storefront parent theme.
2. Copy this directory to wp-content/themes/storefront-child.
3. Activate Storefront Child from Appearance > Themes.
4. Configure WooCommerce and create products as usual.
5. Select Online Summit as the product type for event products.

## Features

- Minimum order amount validation set to 25.
- Northern Ireland added to the WooCommerce country list.
- Custom Online Summit product type.
- Summit name, start time, end time, and time zone fields.
- Custom product display and sale badge.
- Store and product layout adjustments.
- Storefront sidebar, breadcrumbs, title, and sale flash customization.
- Custom footer credit output.
- Translation support.

## Project Structure

- functions.php: theme setup and WooCommerce customizations.
- inc/wcp-online-summit.php: Online Summit product type and admin fields.
- woocommerce/: WooCommerce template overrides.
- style.css: child theme metadata and styling.
- languages/: translation files.

## Customization

Change the minimum order value in functions.php, update styling in style.css, and modify Online Summit fields in inc/wcp-online-summit.php. Test all template overrides after Storefront or WooCommerce updates.

## Requirements

- WordPress
- WooCommerce
- Storefront parent theme

## License

GPLv2 or later unless otherwise specified by the parent theme or included project files.

