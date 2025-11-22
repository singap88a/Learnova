import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../../data/courses.json';

// مكونات فرعية محسنة
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <div className="text-center">
      <div className="relative">
        <div className="w-20 h-20 mx-auto mb-6 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full top-1/2 left-1/2"></div>
      </div>
      <p className="text-lg font-medium text-gray-700">جاري تحميل تفاصيل الدورة...</p>
      <p className="mt-2 text-sm text-gray-500">يرجى الانتظار قليلاً</p>
    </div>
  </div>
);

const PaymentMethodCard = ({ method, selected, onSelect }) => (
  <div
    onClick={() => onSelect(method.id)}
    className={`p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
      selected 
        ? 'border-blue-500 bg-blue-50 shadow-md' 
        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
    }`}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
          selected ? 'border-blue-500 bg-blue-500' : 'border-gray-400'
        }`}>
          {selected && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div className="flex items-center">
          <div className="mr-3 text-2xl">{method.icon}</div>
          <div>
            <h3 className="font-semibold text-gray-900">{method.name}</h3>
            <p className="text-sm text-gray-500">{method.description}</p>
          </div>
        </div>
      </div>
      {method.badge && (
        <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
          {method.badge}
        </span>
      )}
    </div>
  </div>
);

const PurchaseCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState('visa');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [couponMessage, setCouponMessage] = useState('');

  // بيانات طرق الدفع المتاحة
  const paymentMethods = [
    {
      id: 'visa',
      name: 'بطاقة فيزا / ماستركارد',
      icon: '💳',
      description: 'ادفع بأمان باستخدام بطاقتك الائتمانية',
      badge: 'الأكثر استخداماً'
    },
    {
      id: 'paypal',
      name: 'باي بال',
      icon: '🅿️',
      description: 'ادفع عبر حساب باي بال الخاص بك'
    },
    {
      id: 'mada',
      name: 'مدى',
      icon: '🏦',
      description: 'ادفع عبر بطاقة مدى'
    },
    {
      id: 'applepay',
      name: 'آبل باي',
      icon: '',
      description: 'ادفع عبر آبل باي'
    }
  ];

  // كوبونات الخصم المتاحة (بيانات تجريبية)
  const availableCoupons = {
    'LEARNNOW10': 10,
    'STUDENT20': 20,
    'FIRSTBUY15': 15,
    'WELCOME5': 5
  };

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        // محاكاة جلب البيانات من API
        setTimeout(() => {
          const foundCourse = coursesData.courses.find(c => c.id === id);
          if (foundCourse) {
            setCourse(foundCourse);
            setFinalPrice(foundCourse.price);
          }
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching course:', error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const applyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponMessage('يرجى إدخال كود الخصم');
      return;
    }

    if (availableCoupons[couponCode.toUpperCase()]) {
      const discountPercent = availableCoupons[couponCode.toUpperCase()];
      const discountAmount = (course.price * discountPercent) / 100;
      setDiscount(discountAmount);
      setFinalPrice(course.price - discountAmount);
      setCouponMessage(`تم تطبيق خصم ${discountPercent}% بنجاح!`);
    } else {
      setDiscount(0);
      setFinalPrice(course.price);
      setCouponMessage('كود الخصم غير صحيح أو منتهي الصلاحية');
    }
  };

  const handlePurchase = async () => {
    setProcessing(true);

    // محاكاة عملية الدفع
    setTimeout(() => {
      setProcessing(false);
      // بعد الدفع الناجح، انتقل إلى صفحة النجاح
      navigate(`/course/${id}/purchase/success`);
    }, 3000);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-md p-8 mx-auto text-center">
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full">
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">الدورة غير موجودة</h2>
          <p className="mb-6 text-gray-600">عذراً، لم نتمكن من العثور على الدورة المطلوبة. قد تكون غير متاحة أو تم حذفها.</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={() => navigate('/courses')}
              className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              استعرض جميع الدورات
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              العودة للرئيسية
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* رأس الصفحة */}
        <header className="mb-8">
          <button
            onClick={() => navigate(`/course/${id}`)}
            className="inline-flex items-center px-4 py-2.5 text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors font-medium"
          >
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            العودة لتفاصيل الدورة
          </button>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">إتمام عملية الشراء</h1>
          <p className="mt-2 text-gray-600">خطوة واحدة تفصلك عن بدء رحلة التعلم</p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* تفاصيل الدورة */}
          <div className="space-y-6 lg:col-span-2">
            <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">تفاصيل الدورة</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-40 sm:w-32 sm:h-32 rounded-xl"
                  />
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    <p className="mt-1 text-gray-600">المدرب: {course.instructor.name}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {course.duration_hours} ساعة
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {course.lessons_count || 24} درس
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {course.rating || 4.8} تقييم
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-gray-700 line-clamp-2">
                        {course.description || "انضم إلى هذه الدورة المميزة لتطوير مهاراتك ومعرفتك في هذا المجال."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* كوبون الخصم */}
            <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">كوبون الخصم</h3>
                <p className="mt-1 text-sm text-gray-500">ادخل كود الخصم إذا كان لديك واحد</p>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex-grow">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => {
                        setCouponCode(e.target.value);
                        setCouponMessage('');
                      }}
                      placeholder="أدخل كود الخصم هنا"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {couponMessage && (
                      <p className={`mt-2 text-sm ${couponMessage.includes('نجاح') ? 'text-green-600' : 'text-red-600'}`}>
                        {couponMessage}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={applyCoupon}
                    className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap"
                  >
                    تطبيق الكوبون
                  </button>
                </div>
                
                {/* عرض كوبونات مقترحة */}
                <div className="mt-4">
                  <p className="mb-2 text-sm font-medium text-gray-700">كوبونات مقترحة:</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(availableCoupons).slice(0, 3).map(code => (
                      <span 
                        key={code}
                        className="px-3 py-1 text-xs text-blue-800 transition-colors bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200"
                        onClick={() => {
                          setCouponCode(code);
                          setCouponMessage('');
                        }}
                      >
                        {code} - خصم {availableCoupons[code]}%
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* طرق الدفع */}
            <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">طريقة الدفع</h3>
                <p className="mt-1 text-sm text-gray-500">اختر طريقة الدفع المناسبة لك</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {paymentMethods.map((method) => (
                    <PaymentMethodCard
                      key={method.id}
                      method={method}
                      selected={selectedPayment === method.id}
                      onSelect={setSelectedPayment}
                    />
                  ))}
                </div>
                
                {/* نموذج بيانات الدفع (يظهر عند اختيار بطاقة ائتمان) */}
                {selectedPayment === 'visa' && (
                  <div className="p-5 mt-6 border border-gray-200 rounded-xl bg-gray-50">
                    <h4 className="mb-4 font-medium text-gray-900">معلومات البطاقة</h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">رقم البطاقة</label>
                        <input 
                          type="text" 
                          placeholder="1234 5678 9012 3456" 
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">اسم حامل البطاقة</label>
                        <input 
                          type="text" 
                          placeholder="Ahmed Mohamed" 
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">تاريخ الانتهاء</label>
                        <input 
                          type="text" 
                          placeholder="MM/YY" 
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">رمز الأمان (CVV)</label>
                        <input 
                          type="text" 
                          placeholder="123" 
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ملخص الطلب */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900">ملخص الطلب</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">سعر الدورة</span>
                      <span className="font-medium">${course.price.toFixed(2)}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>خصم الكوبون</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">رسوم الخدمة</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between text-lg font-bold">
                        <span>المجموع الكلي</span>
                        <span className="text-blue-600">${finalPrice.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <p className="mt-2 text-sm text-green-600">
                          وفرت ${discount.toFixed(2)} مع الخصم
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handlePurchase}
                    disabled={processing}
                    className={`w-full mt-6 py-4 px-6 font-bold rounded-xl transition-all duration-300 flex items-center justify-center ${
                      processing
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                    }`}
                  >
                    {processing ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                        جاري معالجة طلبك...
                      </>
                    ) : (
                      `ادفع الآن - $${finalPrice.toFixed(2)}`
                    )}
                  </button>

                  <div className="p-4 mt-6 border border-blue-100 rounded-lg bg-blue-50">
                    <div className="flex">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-blue-800">ضمان استرداد الأموال</p>
                        <p className="mt-1 text-xs text-blue-600">استرد كامل المبلغ خلال 30 يوماً إذا لم تكن راضياً عن الدورة</p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-center text-gray-500">
                    بمتابعة الشراء، فإنك توافق على <a href="#" className="text-blue-600 hover:underline">شروط الاستخدام</a> و <a href="#" className="text-blue-600 hover:underline">سياسة الخصوصية</a>
                  </p>
                </div>
              </div>
              
              {/* معلومات الأمان */}
              <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                <svg className="w-4 h-4 ml-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                معاملات آمنة ومشفرة
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCourse;