# Woo Academy

إضافة WooCommerce تضيف محدد عملة للمتجر، وتحفظ العملة المختارة في Cookie، وتحوّل أسعار المنتجات باستخدام أزواج العملات.

## المكونات

- woo-academy.php: نقطة التشغيل وhooks التفعيل وAJAX وتعديل الأسعار.
- class-woo-academy-integration.php: إعدادات WooCommerce والتحقق من أزواج العملات وShortcode [currency_selector].
- assets/js/ajax.js: إرسال العملة المختارة عبر AJAX.

## المتطلبات والتثبيت

- WordPress 4.4 أو أحدث.
- PHP 7.0 أو أحدث.
- WooCommerce 3.5.0 أو أحدث.

انسخ المجلد إلى wp-content/plugins/woo-academy ثم فعّله. من WooCommerce > الإعدادات > Integration أدخل كل زوج في سطر مستقل، مثل:

~~~text
EUR:1.13
GBP:0.86
~~~

أدرج [currency_selector] في المكان المطلوب. العملة الأساسية هي عملة المتجر، والأسعار تتحول عند اختيار عملة أخرى.

## ملاحظات

راجع تكامل مزود أسعار الصرف قبل تفعيل التحديث التلقائي في الإنتاج، ولا تضع مفاتيح API داخل الشيفرة.

## الترخيص

GPLv2، وفق رأس الملف woo-academy.php.
