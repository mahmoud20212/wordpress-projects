# مشاريع WordPress

هذا المستودع يجمع مشاريع WordPress التعليمية والعملية: قوالب، إضافة WooCommerce، وقالب فرعي لـ Storefront.

## المشاريع

| المشروع | النوع | الوصف |
|---|---|---|
| [akhbar](akhbar/README.md) | قالب WordPress | قالب أخبار مع قوالب للمقالات والفيديو والرأي ودعم RTL. |
| [wpacademy](wpacademy/README.md) | قالب WordPress | قالب أكاديمية/محتوى تعليمي مع Sass وJavaScript. |
| [woo-academy](woocommerce/woo-academy/README.md) | إضافة WordPress | تبديل عملة المتجر وتعديل الأسعار حسب العملة المختارة. |
| [storefront-child](woocommerce/storefront-child/README.md) | قالب فرعي | تخصيصات Storefront ونوع منتج Online Summit. |

## المتطلبات والتثبيت

- WordPress وPHP متوافقان مع متطلبات المشروع.
- WooCommerce مطلوب للإضافة والقالب الفرعي.
- Node.js وnpm عند تجميع CSS أو تشغيل أدوات الفحص.
- Composer عند فحص PHP أو توليد ملفات الترجمة.

انسخ المشروع المطلوب إلى مجلد themes أو plugins بحسب نوعه، ثم شغّل عند الحاجة:

~~~bash
npm install
composer install
~~~

فعّل القالب أو الإضافة من لوحة WordPress، وراجع README الخاص بكل مشروع قبل تفعيل خصائص WooCommerce.

## التطوير

أوامر البناء والفحص موثقة داخل README الخاص بكل مشروع. راجع ملف LICENSE داخل المشروع لمعرفة الترخيص.
