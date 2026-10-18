# akhbar

قالب WordPress مخصص لموقع أخبار، مبني على هيكل Underscores. يوفّر قوالب للمقالات والفيديو والرأي ونتائج البحث والأرشيف، مع دعم RTL والترجمة.

## المكونات

- functions.php: وظائف القالب والـ hooks.
- inc/: وظائف القالب والـ Customizer والرأس المخصص وTemplate Tags.
- template-parts/: أجزاء المحتوى المشتركة.
- single-video.php وarchive-video.php: محتوى الفيديو.
- single-opinion.php وarchive-opinion.php: محتوى الرأي.
- css/ وstyle.css: التنسيقات ونسخة RTL.
- js/ وlanguages/: JavaScript وملفات الترجمة.

## المتطلبات والتثبيت

- WordPress 4.5 أو أحدث.
- PHP 5.6 أو أحدث.
- WooCommerce اختياري، وJetpack اختياري لدعم Infinite Scroll.

انسخ المجلد إلى wp-content/themes/akhbar ثم فعّله من لوحة WordPress واضبط القوائم والشعار والصور البارزة.

## التطوير

~~~bash
npm install
composer install
npm run compile:css
npm run compile:rtl
npm run lint:js
npm run lint:scss
composer lint:php
composer lint:wpcs
~~~

استخدم npm run watch لمراقبة Sass، وcomposer make-pot لتوليد ملف الترجمة بعد توفر WP-CLI.

## الترخيص

GPLv2 أو أحدث. راجع LICENSE.
