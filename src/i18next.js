import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          lib_name: 'Ahmad Library',
          home: 'Home',
          books: 'Books',
          cats: 'Categories',
          about: 'About Us',
          contact: 'Contact Us',
          search: 'Search title, author',
          categories: 'Categories',
          profile: 'Profile',
          logout: 'Logout',
          login: 'Login',
          register: 'Create New Account',
          booksCount: 'books',
          viewCategory: 'View Category',
          browseBooks: 'Browse books in this category.',
          loginPage: {
            welcome: 'Welcome Back',
            subtitle: 'Login to your account',
            email: 'Email',
            password: 'Password',
            remember: 'Remember me',
            forgotpass: 'Forgot password?',
            noAccount: "Don't have an account?",
            createAccount: 'Create account',
            loggingIn: 'Signing in...',
          },
          registerPage: {
            welcome: 'Create Account',
            subtitle: 'Create your new account',
            fullName: 'Full Name',
            email: 'Email',
            phoneNumber: 'Phone Number',
            password: 'Password',
            creating: 'Creating account...',
            success: 'Account created successfully',
            failed: 'Registration failed',
            haveAccount: 'Already have an account?',
            createAccount: 'Create Account',
            userName: 'User Name',
          },
          resetPage: {
            welcome: 'Reset Password',
            subtitle: 'Create a new password for your account',
            email: 'Email',
            code: 'Verification Code',
            password: 'New Password',
            sendCode: 'Send Code',
            codeSent: 'Verification code sent successfully',
            reset: 'Reset Password',
            resetting: 'Resetting...',
            success: 'Password reset successfully',
            failed: 'Password reset failed',
            rememberPassword: 'Remember your password?',
          },
          bookPage: {
            home: 'Home',
            books: 'Books',
            premium: 'Premium Collection',
            rating: 'Rating',
            addToCart: 'Add To Cart',
            buyNow: 'Buy Now',
            category: 'Category',
            stock: 'Stock',
            available: 'Available',
            shipping: 'Shipping',
            express: 'Express',
            noDescription: 'No description available.',
            cat: 'bad api dont have this',
          },
          privacy: {
            title: 'Legal & Privacy',
            subtitle:
              'Our commitment to protecting your data and outlining the terms of our service.',
            updated: 'Last Updated: October 2024',

            contents: 'Contents',

            policy: 'Privacy Policy',
            terms: 'Terms & Conditions',

            dataCollection: 'Data Collection',
            dataUsage: 'Data Usage',
            cookies: 'Cookies & Tracking',

            userObligations: 'User Obligations',
            ip: 'Intellectual Property',
            liability: 'Limitation of Liability',

            policyText:
              'At Ahmad Library, the preservation of heritage is paramount. We collect and manage information responsibly to improve your experience.',

            collectionText:
              'We collect information that you voluntarily provide when registering or using our services.',

            personal: 'Contact Information (Name, Email Address)',
            academic: 'Academic interests or research interests',
            interaction: 'Interaction history with digital materials',

            usageText:
              'The information collected is used to enhance your experience within Ahmad Library digital ecosystem.',

            quote:
              'Your data is only used to provide better recommendations and improve our services.',

            cookiesText:
              'We use minimal necessary cookies to ensure functionality and security.',

            userText:
              'Users agree to interact with digital artifacts responsibly and respect intellectual property.',

            ipText:
              'All content and digital interfaces remain the intellectual property of Ahmad Library.',

            liabilityText:
              'Ahmad Library strives for accuracy but cannot guarantee uninterrupted access.',
          },
          aboutPage: {
            badge: 'About Ahmad Library',

            title: 'Our Story',

            description:
              'For centuries, Ahmad Library has preserved knowledge and connected generations of readers with the wisdom of scholars, authors, and thinkers. We are more than a library; we are a place where knowledge and heritage continue to grow.',

            timelineBadge: 'Our Journey',

            timelineTitle: 'A Heritage of Knowledge',

            timeline: [
              {
                year: '1892',
                title: 'The Foundation',
                description:
                  'A modest collection of regional manuscripts curated by visionary scholars.',
              },
              {
                year: '1954',
                title: 'The Great Expansion',
                description:
                  'The library expanded by acquiring rare manuscripts and valuable historical collections.',
              },
              {
                year: '2024',
                title: 'Digital Transformation',
                description:
                  'Ahmad Library became accessible worldwide through modern digital technology.',
              },
            ],

            valuesBadge: 'Our Values',

            valuesTitle: 'Core Values',

            valuesDescription:
              'Our mission is built around preserving knowledge and making it accessible for everyone.',

            preservationTitle: 'Preservation',

            preservationDescription:
              'Safeguarding rare books and manuscripts through careful conservation and modern archival techniques.',

            accessibilityTitle: 'Accessibility',

            accessibilityDescription:
              'Connecting readers and researchers worldwide with valuable knowledge and resources.',
          },
          footer: {
            archive: 'About Our Archive',
            shipping: 'Shipping & Returns',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            contact: 'Contact Scholar',
            copyright: 'Preserving Heritage Through Knowledge.',
          },
        },
      },

      ar: {
        translation: {
          lib_name: 'مكتبة احمد',
          home: 'الرئيسية',
          books: 'الكتب',
          cats: 'التصنيفات',
          about: 'من نحن',
          contact: 'اتصل بنا',
          search: 'ابحث عن الكتاب أو المؤلف',
          categories: 'الاصناف',
          profile: 'الملف الشخصي',
          logout: 'تسجيل الخروج',
          login: 'تسجيل الدخول',
          register: 'إنشاء حساب جديد',
          booksCount: 'كتاب',
          viewCategory: 'عرض التصنيف',
          browseBooks: 'تصفح الكتب في هذا التصنيف.',
          loginPage: {
            welcome: 'مرحبًا بعودتك',
            subtitle: 'سجّل الدخول إلى حسابك',
            email: 'البريد الإلكتروني',
            password: 'كلمة المرور',
            remember: 'تذكرني',
            forgotpass: 'هل نسيت كلمة المرور؟',
            noAccount: 'ليس لديك حساب؟',
            createAccount: 'إنشاء حساب',
            loggingIn: 'جارٍ تسجيل الدخول...',
          },
          registerPage: {
            welcome: 'إنشاء حساب جديد',
            subtitle: 'أنشئ حسابك في مكتبة أحمد',
            fullName: 'الاسم الكامل',
            email: 'البريد الإلكتروني',
            phoneNumber: 'رقم الهاتف',
            password: 'كلمة المرور',
            creating: 'جارٍ إنشاء الحساب...',
            success: 'تم إنشاء الحساب بنجاح',
            failed: 'فشل إنشاء الحساب',
            haveAccount: 'لديك حساب بالفعل؟',
            createAccount: 'إنشاء الحساب',
            userName: 'اسم المستخدم',
          },
          resetPage: {
            welcome: 'إعادة تعيين كلمة المرور',
            subtitle: 'أنشئ كلمة مرور جديدة لحسابك',
            email: 'البريد الإلكتروني',
            code: 'رمز التحقق',
            password: 'كلمة المرور الجديدة',
            sendCode: 'إرسال الرمز',
            codeSent: 'تم إرسال رمز التحقق بنجاح',
            reset: 'إعادة تعيين كلمة المرور',
            resetting: 'جارٍ إعادة التعيين...',
            success: 'تم تغيير كلمة المرور بنجاح',
            failed: 'فشل تغيير كلمة المرور',
            rememberPassword: 'تذكرت كلمة المرور؟',
          },
          bookPage: {
            home: 'الرئيسية',
            books: 'الكتب',
            premium: 'مجموعة مميزة',
            rating: 'التقييم',
            addToCart: 'أضف إلى السلة',
            buyNow: 'شراء الآن',
            category: 'التصنيف',
            stock: 'المخزون',
            available: 'متوفر',
            shipping: 'الشحن',
            express: 'سريع',
            noDescription: 'لا يوجد وصف متاح.',
            cat: 'صنف الكتاب',
          },
          privacy: {
            title: 'القانون والخصوصية',
            subtitle: 'التزامنا بحماية بياناتك وتوضيح شروط استخدام خدماتنا.',
            updated: 'آخر تحديث: أكتوبر 2024',

            contents: 'المحتويات',

            policy: 'سياسة الخصوصية',
            terms: 'الشروط والأحكام',

            dataCollection: 'جمع البيانات',
            dataUsage: 'استخدام البيانات',
            cookies: 'ملفات تعريف الارتباط والتتبع',

            userObligations: 'التزامات المستخدم',
            ip: 'الملكية الفكرية',
            liability: 'حدود المسؤولية',

            policyText:
              'في مكتبة أحمد، نولي أهمية كبيرة للحفاظ على التراث وإدارة المعلومات بشكل مسؤول لتحسين تجربة المستخدم.',

            collectionText:
              'نقوم بجمع المعلومات التي يقدمها المستخدم طوعاً عند التسجيل أو استخدام الخدمات.',

            personal: 'معلومات التواصل مثل الاسم والبريد الإلكتروني',
            academic: 'الاهتمامات العلمية والبحثية',
            interaction: 'سجل التفاعل مع المواد الرقمية',

            usageText:
              'تستخدم البيانات لتحسين تجربة المستخدم داخل النظام الرقمي للمكتبة.',

            quote: 'يتم استخدام بياناتك فقط لتحسين الخدمات وتقديم تجربة أفضل.',

            cookiesText:
              'نستخدم ملفات تعريف ارتباط ضرورية لضمان تشغيل وأمان الموقع.',

            userText:
              'يلتزم المستخدم باستخدام المحتوى الرقمي بطريقة مسؤولة واحترام الحقوق الفكرية.',

            ipText:
              'جميع المحتويات والواجهات الرقمية تعتبر ملكية فكرية لمكتبة أحمد.',

            liabilityText:
              'نسعى لتقديم معلومات دقيقة ولكن لا نضمن عدم حدوث انقطاع كامل للخدمة.',
          },
          aboutPage: {
            badge: 'عن مكتبة أحمد',

            title: 'قصتنا',

            description:
              'منذ عقود، تعمل مكتبة أحمد على حفظ المعرفة وربط أجيال القراء بحكمة العلماء والكتّاب والمفكرين. نحن أكثر من مجرد مكتبة، نحن مساحة يستمر فيها نمو العلم والتراث.',

            timelineBadge: 'رحلتنا',

            timelineTitle: 'إرث من المعرفة',

            timeline: [
              {
                year: '1892',
                title: 'البداية',
                description:
                  'بدأت المكتبة بمجموعة متواضعة من المخطوطات الإقليمية التي جمعها علماء متميزون.',
              },
              {
                year: '1954',
                title: 'مرحلة التوسع',
                description:
                  'توسعت المكتبة من خلال اقتناء مخطوطات نادرة ومجموعات تاريخية قيّمة.',
              },
              {
                year: '2024',
                title: 'التحول الرقمي',
                description:
                  'أصبحت مكتبة أحمد متاحة للقراء حول العالم من خلال التقنيات الرقمية الحديثة.',
              },
            ],

            valuesBadge: 'قيمنا',

            valuesTitle: 'قيمنا الأساسية',

            valuesDescription:
              'تقوم رسالتنا على الحفاظ على المعرفة وجعلها متاحة للجميع.',

            preservationTitle: 'الحفاظ',

            preservationDescription:
              'الحفاظ على الكتب والمخطوطات النادرة باستخدام أساليب الحفظ والأرشفة الحديثة.',

            accessibilityTitle: 'إتاحة المعرفة',

            accessibilityDescription:
              'ربط القراء والباحثين حول العالم بالمعرفة والمصادر القيمة.',
          },
          footer: {
            archive: 'عن أرشيفنا',
            shipping: 'الشحن والإرجاع',
            privacy: 'سياسة الخصوصية',
            terms: 'شروط الخدمة',
            contact: 'تواصل مع المكتبة',
            copyright: 'الحفاظ على التراث من خلال المعرفة.',
          },
        },
      },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
