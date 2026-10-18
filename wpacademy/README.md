# wpAcademy

قالب WordPress لموقع أكاديمية أو محتوى تعليمي، مبني على Underscores وموسع بملفات الأكاديمية داخل academy/ وdashboard.php وwpacademy_widget.php.

## المكونات

- academy/: تنسيقات وواجهات خاصة بالأكاديمية.
- dashboard.php وwpacademy_widget.php: لوحة وWidget المشروع.
- inc/ وtemplate-parts/: وظائف القالب وقوالب المحتوى.
- sass/ وملفات CSS: مصدر Sass والملفات الناتجة ونسخة RTL.
- js/ وfonts/ وlanguages/: JavaScript والخطوط والترجمة.

## المتطلبات والتثبيت

- WordPress 4.5 أو أحدث.
- PHP 5.6 أو أحدث.
- WooCommerce اختياري، وJetpack اختياري لدعم Infinite Scroll.

انسخ المجلد إلى wp-content/themes/wpacademy ثم فعّله من لوحة WordPress واضبط القوائم والودجات وصفحات الأكاديمية.

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

استخدم npm run watch لإعادة بناء Sass تلقائيًا، وcomposer make-pot لتوليد الترجمة.

## الترخيص

GPLv2 أو أحدث. راجع LICENSE.
