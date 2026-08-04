// i18next.js
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
          // ============ NAVIGATION ============
          cart: 'Cart',
          language: 'Language',
          light_mode: 'Light Mode',
          dark_mode: 'Dark Mode',
          lib_name: 'Ahmad Library',
          home: 'Home',
          books: 'Books',
          categories: 'Categories',
          profile: 'Profile',
          logout: 'Logout',
          login: 'Login',
          register: 'Create New Account',
          booksCount: 'books',
          viewCategory: 'View Category',
          browseBooks: 'Browse books in this category.',
          search: 'Search title, author',

          // ============ COMMON ============
          common: {
            viewAll: 'View All',
            viewDetails: 'View Details',
            explore: 'Explore',
            loading: 'Loading...',
            error: 'Something went wrong',
            noResults: 'No results found',
            back: 'Go Back',
            save: 'Save',
            cancel: 'Cancel',
            confirm: 'Confirm',
            delete: 'Delete',
            edit: 'Edit',
            close: 'Close',
            search: 'Search',
            filter: 'Filter',
            sort: 'Sort',
            apply: 'Apply',
            reset: 'Reset',
            optional: 'Optional',
            required: 'Required',
            success: 'Success',
            failed: 'Failed',
            new: 'New',
            featured: 'Featured',
            addToCart: 'Add To Cart',
            buyNow: 'Buy Now',
            view: 'View',
            details: 'Details',
          },

          // ============ HOME PAGE ============
          homePage: {
            hero: {
              badge: '🌟 Welcome to Ahmad Library',
              title: 'Discover the World of',
              highlight: 'Knowledge',
              description:
                'Explore our vast collection of Islamic books, rare manuscripts, and educational resources preserved for generations of knowledge seekers.',
              browse: 'Browse Books',
              categories: 'Categories',
              books: 'Books Available',
              authors: 'Authors',
              authentic: 'Authentic Sources',
            },
            categories: {
              title: 'Explore Categories',
              description:
                'Discover our curated collections across various Islamic and academic disciplines.',
              button: 'View All Categories',
            },
            featured: {
              title: 'Featured Books',
              description:
                'Discover our most cherished books and rare manuscripts, carefully selected for knowledge seekers.',
              button: 'View All Books',
            },
            quote: {
              text: 'The ink of the scholar is more sacred than the blood of the martyr.',
              reference: '— Islamic Tradition',
            },
          },

          // ============ FEATURED SECTION ============
          featured: {
            badge: '✨ Featured',
            title: 'Featured Books',
            description:
              'Discover our most cherished books and rare manuscripts, carefully selected for knowledge seekers.',
            new: 'New',
            viewAll: 'View All Books',
          },

          // ============ BOOKS PAGE ============
          booksPage: {
            title: 'Browse Books',
            description:
              'Explore our collection of Islamic books, rare manuscripts, and educational works preserved for knowledge seekers.',
            sort: 'Sort by',
            featured: 'Featured',
            newest: 'Newest',
            oldest: 'Oldest',
            priceLowHigh: 'Price: Low to High',
            priceHighLow: 'Price: High to Low',
            rating: 'Highest Rated',
            nameAZ: 'Name (A-Z)',
            nameZA: 'Name (Z-A)',
            category: 'Category',
            all: 'All Books',
            searchResult: 'Search results for',
            noBooks: 'No books found.',
            topRated: 'Highest Rated',
            addToCart: 'Add To Cart',
            wishlist: 'Add to Wishlist',
          },

          // ============ BOOK DETAIL PAGE ============
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
            cat: 'Category',
            about: 'About this Product',
            purchase: 'Purchase',
            delivery: 'Delivery',
            certificate: 'Certificate',
            secureCourier: 'Secure Courier',
            authenticity: 'Authenticity Included',
            quantity: 'Quantity',
            adding: 'Adding...',
            shipsInternationally:
              'Ships internationally. Price includes archival boxing and insurance.',
            reviews: 'Reviews',
            noReviews: 'No reviews yet.',
            writeReview: 'Write a Review',
            comment: 'Write your comment...',
            submitReview: 'Submit Review',
            sending: 'Sending...',
          },

          // ============ LOGIN PAGE ============
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

          // ============ REGISTER PAGE ============
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

          // ============ RESET PASSWORD PAGE ============
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

          // ============ PROFILE PAGE ============
          profilePage: {
            myOrders: 'My Orders',
            trackManage: 'Track and manage your purchases',
            noOrders: 'No Orders Yet',
            noOrdersDesc: 'Your orders will appear here.',
            errorLoading: 'Error loading orders.',
            order: 'Order',
            amount: 'Amount',
            payment: 'Payment',
            date: 'Date',
            pending: 'Pending',
            processing: 'Processing',
            completed: 'Completed',
            cancelled: 'Cancelled',
            memberAccount: 'Member Account',
            fullName: 'Full Name',
            email: 'Email',
            phone: 'Phone',
            city: 'City',
            notProvided: 'Not provided',
            orders: 'Orders',
            totalSpent: 'Total Spent',
            status: 'Status',
            verified: 'Verified',
            settings: 'Settings',
            changeEmail: 'Change Email',
            newEmail: 'New Email',
            updateEmail: 'Update Email',
            updating: 'Updating...',
            updated: 'Updated',
            changePassword: 'Change Password',
            currentPassword: 'Current Password',
            newPassword: 'New Password',
            confirmNewPassword: 'Confirm New Password',
            updatePassword: 'Update Password',
            passwordsDoNotMatch: 'Passwords do not match',
          },

          // ============ CART PAGE ============
          cartPage: {
            title: 'Your Cart',
            empty: 'Your cart is empty.',
            subtotal: 'Subtotal',
            shipping: 'Shipping',
            free: 'Free',
            total: 'Total',
            checkout: 'Proceed to Checkout',
            clearCart: 'Clear Cart',
            orderSummary: 'Order Summary',
            items: 'Items',
            paymentMethod: 'Payment Method',
            cashOnDelivery: '💵 Cash on Delivery',
            visaMastercard: '💳 Visa / Mastercard',
            placeOrder: 'Place Order',
            processing: 'Processing...',
            orderConfirmed: 'Order Confirmed',
            orderPlaced: 'Your order has been placed successfully.',
            continueShopping: 'Continue Shopping',
          },

          // ============ ABOUT PAGE ============
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

          // ============ PRIVACY PAGE ============
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

          // ============ FOOTER ============
          footer: {
            archive: 'About Our Archive',
            shipping: 'Shipping & Returns',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            contact: 'Contact Scholar',
            copyright: 'Preserving Heritage Through Knowledge.',
          },
          validation: {
            email: {
              required: 'Email is required.',
              invalid: 'Email must be a valid email.',
              domain:
                'Please enter a valid Gmail, Yahoo, or iCloud email address.',
            },
            password: {
              required: 'Password is required.',
              min: 'Password must be at least 6 characters.',
              uppercase: 'Password must start with a capital letter.',
              number: 'Password must contain at least one number.',
              special: 'Password must contain at least one special character.',
            },
          },
        },
      },

      ar: {
        translation: {
          // ============ NAVIGATION ============
          cart: 'السلة',
          language: 'اللغة',
          light_mode: 'الوضع الفاتح',
          dark_mode: 'الوضع الداكن',
          lib_name: 'مكتبة أحمد',
          home: 'الرئيسية',
          books: 'الكتب',
          categories: 'التصنيفات',
          profile: 'الملف الشخصي',
          logout: 'تسجيل الخروج',
          login: 'تسجيل الدخول',
          register: 'إنشاء حساب جديد',
          booksCount: 'كتاب',
          viewCategory: 'عرض التصنيف',
          browseBooks: 'تصفح الكتب في هذا التصنيف.',
          search: 'ابحث عن الكتاب أو المؤلف',

          // ============ COMMON ============
          common: {
            viewAll: 'عرض الكل',
            viewDetails: 'عرض التفاصيل',
            explore: 'استكشف',
            loading: 'جاري التحميل...',
            error: 'حدث خطأ ما',
            noResults: 'لا توجد نتائج',
            back: 'رجوع',
            save: 'حفظ',
            cancel: 'إلغاء',
            confirm: 'تأكيد',
            delete: 'حذف',
            edit: 'تعديل',
            close: 'إغلاق',
            search: 'بحث',
            filter: 'تصفية',
            sort: 'ترتيب',
            apply: 'تطبيق',
            reset: 'إعادة تعيين',
            optional: 'اختياري',
            required: 'مطلوب',
            success: 'تم بنجاح',
            failed: 'فشل',
            new: 'جديد',
            featured: 'مميز',
            addToCart: 'أضف إلى السلة',
            buyNow: 'شراء الآن',
            view: 'عرض',
            details: 'تفاصيل',
          },

          // ============ HOME PAGE ============
          homePage: {
            hero: {
              badge: '🌟 مرحباً بك في مكتبة أحمد',
              title: 'اكتشف عالم',
              highlight: 'المعرفة',
              description:
                'استكشف مجموعتنا الواسعة من الكتب الإسلامية والمخطوطات النادرة والموارد التعليمية المحفوظة لأجيال من طالبي العلم.',
              browse: 'تصفح الكتب',
              categories: 'التصنيفات',
              books: 'كتب متوفرة',
              authors: 'مؤلفون',
              authentic: 'مصادر موثوقة',
            },
            categories: {
              title: 'استكشف التصنيفات',
              description:
                'اكتشف مجموعاتنا المختارة في مختلف التخصصات الإسلامية والأكاديمية.',
              button: 'عرض جميع التصنيفات',
            },
            featured: {
              title: 'الكتب المميزة',
              description:
                'اكتشف كتبنا الأكثر قيمة والمخطوطات النادرة، مختارة بعناية لطالبي المعرفة.',
              button: 'عرض جميع الكتب',
            },
            quote: {
              text: 'مداد العالم أقدس من دم الشهيد',
              reference: '— التراث الإسلامي',
            },
          },

          // ============ FEATURED SECTION ============
          featured: {
            badge: '✨ مميز',
            title: 'الكتب المميزة',
            description:
              'اكتشف كتبنا الأكثر قيمة والمخطوطات النادرة، مختارة بعناية لطالبي المعرفة.',
            new: 'جديد',
            viewAll: 'عرض جميع الكتب',
          },

          // ============ BOOKS PAGE ============
          booksPage: {
            title: 'تصفح الكتب',
            description:
              'استكشف مجموعتنا من الكتب الإسلامية والمخطوطات النادرة والكتب التعليمية المحفوظة لطالبي المعرفة.',
            sort: 'ترتيب حسب',
            featured: 'المميزة',
            newest: 'الأحدث',
            oldest: 'الأقدم',
            priceLowHigh: 'السعر: من الأقل إلى الأعلى',
            priceHighLow: 'السعر: من الأعلى إلى الأقل',
            rating: 'الأعلى تقييماً',
            nameAZ: 'الاسم (أ-ي)',
            nameZA: 'الاسم (ي-أ)',
            category: 'التصنيف',
            all: 'جميع الكتب',
            searchResult: 'نتائج البحث عن',
            noBooks: 'لم يتم العثور على كتب.',
            topRated: 'الأعلى تقييماً',
            addToCart: 'أضف إلى السلة',
            wishlist: 'أضف للمفضلة',
          },

          // ============ BOOK DETAIL PAGE ============
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
            about: 'عن هذا المنتج',
            purchase: 'الشراء',
            delivery: 'التوصيل',
            certificate: 'الشهادة',
            secureCourier: 'شحن آمن',
            authenticity: 'شهادة الأصالة متضمنة',
            quantity: 'الكمية',
            adding: 'جاري الإضافة...',
            shipsInternationally: 'شحن دولي. السعر يشمل التغليف والتأمين.',
            reviews: 'التقييمات',
            noReviews: 'لا توجد تقييمات بعد.',
            writeReview: 'اكتب تقييماً',
            comment: 'اكتب تعليقك...',
            submitReview: 'إرسال التقييم',
            sending: 'جاري الإرسال...',
          },

          // ============ LOGIN PAGE ============
          loginPage: {
            welcome: 'مرحباً بعودتك',
            subtitle: 'سجّل الدخول إلى حسابك',
            email: 'البريد الإلكتروني',
            password: 'كلمة المرور',
            remember: 'تذكرني',
            forgotpass: 'هل نسيت كلمة المرور؟',
            noAccount: 'ليس لديك حساب؟',
            createAccount: 'إنشاء حساب',
            loggingIn: 'جارٍ تسجيل الدخول...',
          },

          // ============ REGISTER PAGE ============
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

          // ============ RESET PASSWORD PAGE ============
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

          // ============ PROFILE PAGE ============
          profilePage: {
            myOrders: 'طلباتي',
            trackManage: 'تتبع وإدارة مشترياتك',
            noOrders: 'لا توجد طلبات بعد',
            noOrdersDesc: 'ستظهر طلباتك هنا.',
            errorLoading: 'حدث خطأ في تحميل الطلبات.',
            order: 'طلب',
            amount: 'المبلغ',
            payment: 'الدفع',
            date: 'التاريخ',
            pending: 'قيد الانتظار',
            processing: 'قيد المعالجة',
            completed: 'مكتمل',
            cancelled: 'ملغي',
            memberAccount: 'حساب عضو',
            fullName: 'الاسم الكامل',
            email: 'البريد الإلكتروني',
            phone: 'الهاتف',
            city: 'المدينة',
            notProvided: 'غير محدد',
            orders: 'الطلبات',
            totalSpent: 'إجمالي الإنفاق',
            status: 'الحالة',
            verified: 'موثق',
            settings: 'الإعدادات',
            changeEmail: 'تغيير البريد الإلكتروني',
            newEmail: 'بريد إلكتروني جديد',
            updateEmail: 'تحديث البريد',
            updating: 'جاري التحديث...',
            updated: 'تم التحديث',
            changePassword: 'تغيير كلمة المرور',
            currentPassword: 'كلمة المرور الحالية',
            newPassword: 'كلمة المرور الجديدة',
            confirmNewPassword: 'تأكيد كلمة المرور الجديدة',
            updatePassword: 'تحديث كلمة المرور',
            passwordsDoNotMatch: 'كلمات المرور غير متطابقة',
          },

          // ============ CART PAGE ============
          cartPage: {
            title: 'سلة التسوق',
            empty: 'سلة التسوق فارغة.',
            subtotal: 'المجموع الفرعي',
            shipping: 'الشحن',
            free: 'مجاني',
            total: 'الإجمالي',
            checkout: 'إتمام الشراء',
            clearCart: 'تفريغ السلة',
            orderSummary: 'ملخص الطلب',
            items: 'المنتجات',
            paymentMethod: 'طريقة الدفع',
            cashOnDelivery: '💵 الدفع عند الاستلام',
            visaMastercard: '💳 فيزا / ماستركارد',
            placeOrder: 'تقديم الطلب',
            processing: 'جاري المعالجة...',
            orderConfirmed: 'تم تأكيد الطلب',
            orderPlaced: 'تم تقديم طلبك بنجاح.',
            continueShopping: 'مواصلة التسوق',
          },

          // ============ ABOUT PAGE ============
          aboutPage: {
            badge: 'عن مكتبة أحمد',
            title: 'قصتنا',
            description:
              'منذ عقود، تعمل مكتبة أحمد على حفظ المعرفة وربط أجيال القراء بحكمة العلماء والكتّاب والمفكرين. نحن أكثر من مجرد مكتبة، نحن مساحة يستمر فيها نمو العلم والتراث.',
            timelineBadge: 'رحلتنا',
            timelineTitle: 'إرث من المعرفة',
            timeline: [
              {
                year: '١٨٩٢',
                title: 'البداية',
                description:
                  'بدأت المكتبة بمجموعة متواضعة من المخطوطات الإقليمية التي جمعها علماء متميزون.',
              },
              {
                year: '١٩٥٤',
                title: 'مرحلة التوسع',
                description:
                  'توسعت المكتبة من خلال اقتناء مخطوطات نادرة ومجموعات تاريخية قيّمة.',
              },
              {
                year: '٢٠٢٤',
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

          // ============ PRIVACY PAGE ============
          privacy: {
            title: 'القانون والخصوصية',
            subtitle: 'التزامنا بحماية بياناتك وتوضيح شروط استخدام خدماتنا.',
            updated: 'آخر تحديث: أكتوبر ٢٠٢٤',
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
              'نقوم بجمع المعلومات التي يقدمها المستخدم طواعية عند التسجيل أو استخدام الخدمات.',
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

          // ============ FOOTER ============
          footer: {
            archive: 'عن أرشيفنا',
            shipping: 'الشحن والإرجاع',
            privacy: 'سياسة الخصوصية',
            terms: 'شروط الخدمة',
            contact: 'تواصل مع المكتبة',
            copyright: 'الحفاظ على التراث من خلال المعرفة.',
          },

          validation: {
            email: {
              required: 'البريد الإلكتروني مطلوب.',
              invalid: 'يرجى إدخال بريد إلكتروني صالح.',
              domain: 'يسمح فقط بعناوين Gmail وYahoo وiCloud.',
            },
            password: {
              required: 'كلمة المرور مطلوبة.',
              min: 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.',
              uppercase: 'يجب أن تبدأ كلمة المرور بحرف إنجليزي كبير.',
              number: 'يجب أن تحتوي كلمة المرور على رقم واحد على الأقل.',
              special: 'يجب أن تحتوي كلمة المرور على رمز خاص واحد على الأقل.',
            },
          },
        },
      },
    },

    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
