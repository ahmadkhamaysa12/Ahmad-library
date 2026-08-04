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
          featured: {
            badge: '✨ Featured',
            title: 'Featured Books',
            description:
              'Discover our most cherished books and rare manuscripts, carefully selected for knowledge seekers.',
            new: 'New',
            viewAll: 'View All Books',
          },
          booksPage: {
            title: 'Books',
            description:
              'Explore our collection of valuable books and discover your next favorite read.',

            sort: 'Sort',
            priceLowHigh: 'Price: Low to High',
            priceHighLow: 'Price: High to Low',
            nameAZ: 'Name: A-Z',
            nameZA: 'Name: Z-A',
            topRated: 'Top Rated',

            category: 'Category',
            all: 'All',

            price: 'Price',

            addToCart: 'Add to Cart',

            noBooks: 'No books found.',
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

            passwordPlaceholder: 'Enter your new password',
          },
          reviews: {
            title: 'Reviews',
            writeReview: 'Write a Review',
            placeholder: 'Write your comment...',
            submit: 'Submit Review',
            sending: 'Sending...',
            noReviews: 'No reviews yet.',
          },
          profilePage: {
            orders: 'Orders',
            totalSpent: 'Total Spent',
            status: 'Status',
            verified: 'Verified',
            memberAccount: 'Member Account',

            fullName: 'Full Name',
            email: 'Email',
            phone: 'Phone',
            city: 'City',
            notProvided: 'Not provided',

            myOrders: 'My Orders',
            trackManage: 'Track and manage your purchases',
            errorLoading: 'Error loading orders.',
            noOrders: 'No Orders Yet',
            noOrdersDesc: 'Your orders will appear here.',

            order: 'Order',
            amount: 'Amount',
            payment: 'Payment',
            date: 'Date',

            pending: 'Pending',
            processing: 'Processing',
            completed: 'Completed',
            cancelled: 'Cancelled',
            active: 'Active',

            paid: 'Paid',
            unpaid: 'Unpaid',

            settings: 'Settings',

            changeEmail: 'Change Email',
            newEmail: 'New Email',
            updateEmail: 'Update Email',

            changePassword: 'Change Password',
            currentPassword: 'Current Password',
            newPassword: 'New Password',
            confirmNewPassword: 'Confirm New Password',
            updatePassword: 'Update Password',

            updating: 'Updating...',
            updated: 'Updated',

            passwordsDoNotMatch: 'Passwords do not match.',
          },
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
          footer: {
            archive: 'About Our Archive',

            shipping: 'Shipping & Returns',

            privacy: 'Privacy Policy',

            terms: 'Terms of Service',

            contact: 'Contact Scholar',

            description:
              'Preserving knowledge, heritage, and valuable collections for generations of readers.',

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
              uppercase: 'Password must begin with a capital letter.',
              number: 'Password must contain at least one number.',
              special: 'Password must contain at least one special character.',
            },

            code: {
              required: 'Code is required.',
              pattern: 'Code must be 4 digits.',
            },

            username: {
              required: 'Username is required.',
              pattern:
                'Use 4–16 characters. Start with a letter. Letters, numbers, and underscores only.',
            },

            fullName: {
              required: 'Full name is required.',
              min: 'Full name must be at least 3 characters.',
            },

            phone: {
              required: 'Phone number is required.',
              pattern: 'Phone number must contain 10 to 15 digits.',
            },
          },
          checkoutPage: {
            title: 'Checkout',
            orderConfirmed: 'Order Confirmed',
            orderPlaced: 'Your order has been placed successfully.',
            paymentMethod: 'Payment Method',
            cashPayment: '💵 Cash on Delivery',
            visaPayment: '💳 Visa / Mastercard',
            processing: 'Processing...',
            placeOrder: 'Place Order',
            continueShopping: 'Continue Shopping',
          },
        },
      },
      ar: {
        translation: {
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
          featured: {
            badge: '✨ مميز',

            title: 'الكتب المميزة',

            description:
              'اكتشف كتبنا الأكثر قيمة والمخطوطات النادرة، مختارة بعناية لطالبي المعرفة.',

            new: 'جديد',

            viewAll: 'عرض جميع الكتب',
          },
          booksPage: {
            title: 'الكتب',
            description: 'استكشف مجموعتنا من الكتب القيمة واكتشف كتابك القادم.',

            sort: 'ترتيب',
            priceLowHigh: 'السعر: من الأقل إلى الأعلى',
            priceHighLow: 'السعر: من الأعلى إلى الأقل',
            nameAZ: 'الاسم: أ - ي',
            nameZA: 'الاسم: ي - أ',
            topRated: 'الأعلى تقييماً',

            category: 'التصنيف',
            all: 'الكل',

            price: 'السعر',

            addToCart: 'أضف إلى السلة',

            noBooks: 'لا توجد كتب.',
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

            passwordPlaceholder: 'أدخل كلمة المرور الجديدة',

            rememberPassword: 'تذكرت كلمة المرور؟',
          },
          reviews: {
            title: 'التقييمات',
            writeReview: 'اكتب تقييماً',
            placeholder: 'اكتب تعليقك...',
            submit: 'إرسال التقييم',
            sending: 'جاري الإرسال...',
            noReviews: 'لا توجد تقييمات بعد.',
          },
          profilePage: {
            orders: 'الطلبات',
            totalSpent: 'إجمالي الإنفاق',
            status: 'الحالة',
            verified: 'موثق',
            memberAccount: 'حساب عضو',

            fullName: 'الاسم الكامل',
            email: 'البريد الإلكتروني',
            phone: 'رقم الهاتف',
            city: 'المدينة',
            notProvided: 'غير متوفر',

            myOrders: 'طلباتي',
            trackManage: 'تتبع وإدارة طلباتك',
            errorLoading: 'حدث خطأ أثناء تحميل الطلبات.',
            noOrders: 'لا توجد طلبات',
            noOrdersDesc: 'ستظهر طلباتك هنا.',

            order: 'الطلب',
            amount: 'المبلغ',
            payment: 'الدفع',
            date: 'التاريخ',

            pending: 'قيد الانتظار',
            processing: 'قيد المعالجة',
            completed: 'مكتمل',
            cancelled: 'ملغي',
            active: 'نشط',

            paid: 'مدفوع',
            unpaid: 'غير مدفوع',

            settings: 'الإعدادات',

            changeEmail: 'تغيير البريد الإلكتروني',
            newEmail: 'البريد الإلكتروني الجديد',
            updateEmail: 'تحديث البريد الإلكتروني',

            changePassword: 'تغيير كلمة المرور',
            currentPassword: 'كلمة المرور الحالية',
            newPassword: 'كلمة المرور الجديدة',
            confirmNewPassword: 'تأكيد كلمة المرور الجديدة',
            updatePassword: 'تحديث كلمة المرور',

            updating: 'جارٍ التحديث...',
            updated: 'تم التحديث',

            passwordsDoNotMatch: 'كلمتا المرور غير متطابقتين.',
          },
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
                year: '2026',
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
          footer: {
            archive: 'عن أرشيفنا',

            shipping: 'الشحن والإرجاع',

            privacy: 'سياسة الخصوصية',

            terms: 'شروط الخدمة',

            contact: 'تواصل مع المكتبة',

            description:
              'الحفاظ على المعرفة والتراث والمجموعات القيمة لتبقى متاحة للأجيال القادمة.',

            copyright: 'الحفاظ على التراث من خلال المعرفة.',
          },
          validation: {
            email: {
              required: 'البريد الإلكتروني مطلوب.',

              invalid: 'يجب إدخال بريد إلكتروني صالح.',

              domain: 'يرجى إدخال بريد Gmail أو Yahoo أو iCloud صالح.',
            },

            password: {
              required: 'كلمة المرور مطلوبة.',

              min: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.',

              uppercase: 'يجب أن تبدأ كلمة المرور بحرف كبير.',

              number: 'يجب أن تحتوي كلمة المرور على رقم واحد على الأقل.',

              special: 'يجب أن تحتوي كلمة المرور على رمز خاص واحد على الأقل.',
            },

            code: {
              required: 'رمز التحقق مطلوب.',

              pattern: 'رمز التحقق يجب أن يتكون من 4 أرقام.',
            },

            username: {
              required: 'اسم المستخدم مطلوب.',

              pattern:
                'استخدم من 4 إلى 16 حرفًا. يجب أن يبدأ بحرف، ويسمح بالأحرف والأرقام والشرطة السفلية فقط.',
            },

            fullName: {
              required: 'الاسم الكامل مطلوب.',

              min: 'يجب أن يكون الاسم الكامل 3 أحرف على الأقل.',
            },

            phone: {
              required: 'رقم الهاتف مطلوب.',

              pattern: 'يجب أن يحتوي رقم الهاتف على 10 إلى 15 رقمًا.',
            },
          },
          checkoutPage: {
            title: 'إتمام الطلب',
            orderConfirmed: 'تم تأكيد الطلب',
            orderPlaced: 'تم تقديم طلبك بنجاح.',
            paymentMethod: 'طريقة الدفع',
            cashPayment: '💵 الدفع عند الاستلام',
            visaPayment: '💳 فيزا / ماستركارد',
            processing: 'جاري المعالجة...',
            placeOrder: 'تقديم الطلب',
            continueShopping: 'متابعة التسوق',
          },
        },
      },
    },
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
