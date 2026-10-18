# Storefront Child

قالب فرعي لـ Storefront يخصص تجربة متجر WooCommerce ويضيف نوع منتج Online Summit.

## الوظائف الرئيسية

- حد أدنى لقيمة الطلب قدره 25 قبل إتمام الشراء.
- إضافة Northern Ireland إلى قائمة الدول.
- تخصيص بطاقات المنتجات والتذييل وإزالة بعض عناصر Storefront.
- نوع منتج افتراضي wcp_online_summit مع اسم الفعالية ووقت البداية والنهاية والمنطقة الزمنية.
- دعم الترجمة من languages/.

## المتطلبات والتثبيت

- WordPress وWooCommerce وقالب Storefront الأب.

انسخ المجلد إلى wp-content/themes/storefront-child، وثبّت Storefront، ثم فعّل القالب الفرعي. يظهر نوع Online Summit عند إنشاء منتج WooCommerce.

## التخصيص

- غيّر الحد الأدنى للطلب في functions.php داخل المتغير minimum.
- عدّل الألوان والتخطيط في style.css.
- عدّل حقول الفعالية في inc/wcp-online-summit.php.
- راجع مجلد woocommerce/ لتخصيص قوالب المنتج والأرشيف.

## ملاحظات

اختبر القالب بعد تحديث Storefront أو WooCommerce، خصوصًا صفحات الدفع والمنتج المخصص.

## الترخيص

GPLv2 أو أحدث.
