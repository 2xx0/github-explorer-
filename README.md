# GitHub Radar - استكشاف ملفات GitHub

![GitHub Radar Screenshot](https://via.placeholder.com/800x400?text=GitHub+Radar+Demo)  

## الوصف
تطبيق ويب بسيط للبحث عن ملفات مستخدمي GitHub، يعرض معلومات المستخدم (مثل الصورة، البايو، المتابعين) والمستودعات النشطة. مبني على:
- **Backend**: Node.js مع Express و Axios (للـ GitHub API).
- **Frontend**: HTML, CSS (مع أنميشنات احترافية), JavaScript.
- يدعم اللغة العربية (dir=rtl).

الهدف: تسهيل استكشاف GitHub بتصميم عصري وسريع.

## التثبيت والتشغيل محلياً
1. حمّل البروجكت: `git clone https://github.com/YourUsername/github-radar.git`
2. روح للمجلد: `cd github-radar`
3. ثبت الـ dependencies: `npm install`
4. شغل السيرفر: `node server.js`
5. افتح المتصفح على: `http://localhost:3000`

**ملاحظة**: يحتاج GitHub API، لو واجهت مشكلة في الـ rate limit، أضف token في الـ code (اختياري).

## الاستخدام
- أدخل اسم مستخدم GitHub في خانة البحث.
- اضغط "استعلام" لعرض الملف الشخصي والمستودعات.

## المميزات
- تصميم responsive (يعمل على موبايل وديسكتوب).
- أنميشنات خلفية (نجوم و particles).
- عرض إحصائيات (متابعين، مستودعات، إلخ).
- يعرض أحدث 6 مستودعات.

## الـ Demo (تجربة بدون تحميل)
يمكنك تجربة التطبيق مباشرة هنا: [رابط الـ Demo](https://your-app-name.vercel.app)  
(Hosted on Vercel - شاهد تحت لطريقة الـ hosting).

## الترخيص
MIT License - حر للاستخدام والتعديل.

## المساهمة
إذا عندك اقتراحات، fork الـ repo وأرسل pull request!

