# Woo Academy

## Project Overview

Woo Academy is a WooCommerce plugin that adds front-end currency selection and converts product prices using configured exchange-rate pairs. The selected currency is stored in a browser cookie and applied to product prices and currency symbols.

## Technologies

- WordPress Plugin API and PHP
- WooCommerce hooks, filters, and integration settings
- JavaScript and jQuery
- WordPress AJAX
- WordPress Internationalization API

## Setup and Usage

1. Copy the plugin to wp-content/plugins/woo-academy.
2. Activate it from Plugins in the WordPress dashboard.
3. Open WooCommerce > Settings > Integration.
4. Configure one currency pair per line:

~~~text
EUR:1.13
GBP:0.86
~~~

5. Add the shortcode [currency_selector] to a page, widget, or supported template location.

The WooCommerce store currency is used as the base currency. Prices are converted when a customer selects another supported currency.

## Features

- Front-end currency selector.
- Product price and currency symbol conversion.
- AJAX-based currency selection with nonce validation.
- Manual exchange-rate configuration.
- Optional scheduled exchange-rate integration foundation.
- Translation-ready strings.

## Requirements

- WordPress 4.4 or later.
- PHP 7.0 or later.
- WooCommerce 3.5.0 or later.

## Development

woo-academy.php is the main entry point. WooCommerce settings and shortcode logic are implemented in class-woo-academy-integration.php. Front-end AJAX behavior is located in assets/js/ajax.js.

## License

GPLv2. Refer to the plugin header for details.

