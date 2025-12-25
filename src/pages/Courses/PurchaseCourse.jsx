import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import coursesData from '../../data/courses.json';
import { useAuth } from '../../hooks/useAuth';

const LoadingSpinner = ({ message = 'Loading...' }) => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 mb-4 border-4 border-blue-600 rounded-full border-t-transparent animate-spin" />
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700">{message}</p>
        <p className="text-sm text-gray-500">Please wait a moment</p>
      </div>
    </div>
  </div>
);

const PaymentMethod = ({ id, name, icon, selected, onSelect, badge }) => (
  <button
    aria-pressed={selected}
    onClick={() => onSelect(id)}
    className={`w-full text-left p-4 rounded-lg transition-shadow flex items-center justify-between border ${
      selected ? 'border-blue-500 shadow-lg bg-gradient-to-r from-white to-blue-50' : 'border-gray-200 bg-white hover:shadow'
    }`}
  >
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-10 h-10 text-xl bg-gray-100 rounded-md">{icon}</div>
      <div>
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-xs text-gray-500">Fast & secure</div>
      </div>
    </div>
    {badge && <span className="px-2 py-1 text-xs text-blue-700 bg-blue-100 rounded-full">{badge}</span>}
  </button>
);

const RegisterRequiredModal = ({ open, onClose, onSignUp, onLogin }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md p-6 bg-white shadow-xl rounded-2xl">
        <button onClick={onClose} className="absolute text-gray-400 top-3 right-3 hover:text-gray-600" aria-label="Close">×</button>
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center text-white bg-blue-600 rounded-lg w-14 h-14">i</div>
          <div>
            <h3 className="text-lg font-semibold">Account required</h3>
            <p className="mt-1 text-sm text-gray-600">You need an account to complete the purchase. Create one or log in to continue.</p>
            <div className="flex gap-3 mt-4">
              <button onClick={onSignUp} className="px-4 py-2 text-white bg-blue-600 rounded-md">Create account</button>
              <button onClick={onLogin} className="px-4 py-2 bg-gray-100 rounded-md">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PurchaseCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAuth();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState('card');
  const [coupon, setCoupon] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const paymentMethods = [
    { id: 'card', name: 'Credit / Debit Card', icon: '💳', badge: 'Popular' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️' },
    { id: 'apple', name: 'Apple Pay', icon: '' }
  ];

  const coupons = { LEARNNOW10: 10, STUDENT20: 20, WELCOME5: 5 };

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setTimeout(() => {
      if (!mounted) return;
      const found = coursesData.courses.find(c => c.id === id);
      if (found) setCourse(found);
      setLoading(false);
    }, 600);
    return () => { mounted = false; };
  }, [id]);

  const applyCoupon = () => {
    setCouponMsg(null);
    if (!coupon.trim()) {
      setCouponMsg({ type: 'error', text: 'Please enter a coupon code' });
      return;
    }
    const pct = coupons[coupon.toUpperCase()];
    if (!pct) {
      setCouponMsg({ type: 'error', text: 'Invalid or expired coupon' });
      setAppliedDiscount(0);
      return;
    }
    const amount = (course.price * pct) / 100;
    setAppliedDiscount(amount);
    setCouponMsg({ type: 'success', text: `Applied ${pct}% off — you saved $${amount.toFixed(2)}` });
  };

  const total = course ? (course.price - appliedDiscount) : 0;

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      navigate(`/course/${id}/purchase/success`);
    }, 1400);
  };

  const [showModal, setShowModal] = useState(false);

  if (loading) return <LoadingSpinner message="Loading course details..." />;
  if (!course) return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Course not found</h2>
        <p className="mt-2 text-sm text-gray-600">This course may be removed or unavailable.</p>
        <div className="flex justify-center gap-3 mt-4">
          <button onClick={() => navigate('/courses')} className="px-4 py-2 text-white bg-blue-600 rounded-md">Browse courses</button>
          <button onClick={() => navigate('/')} className="px-4 py-2 bg-gray-100 rounded-md">Home</button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="py-10 pt-28">
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto lg:grid-cols-3">
        <section className="space-y-6 lg:col-span-2">
          <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
            <div className="p-6 md:flex md:gap-6">
              <img src={course.image} alt={course.title} className="object-cover w-full h-40 rounded-lg md:w-48" />
              <div className="flex-1 mt-4 md:mt-0">
                <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
                <p className="mt-2 text-sm text-gray-500">By <strong>{course.instructor.name}</strong></p>
                <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-2">⏱ {course.duration_hours}h</span>
                  <span className="flex items-center gap-2">📚 {course.lessons_count || 24} lessons</span>
                  <span className="flex items-center gap-2">⭐ {course.rating || 4.8}</span>
                </div>
                <p className="mt-4 leading-relaxed text-gray-700">{course.description || 'This premium course helps you master practical skills with hands-on lessons and real-world projects.'}</p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <h3 className="text-sm font-medium text-gray-700">What you get</h3>
              <ul className="grid grid-cols-1 gap-2 mt-3 text-sm text-gray-600 sm:grid-cols-2">
                <li>Lifetime access</li>
                <li>Certificate of completion</li>
                <li>Downloadable resources</li>
                <li>Community access</li>
              </ul>
            </div>
          </div>

          <div className="p-6 overflow-hidden bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-semibold">Apply Coupon</h3>
            <p className="mt-1 text-sm text-gray-500">Have a promo code? Apply it for a discount.</p>
            <div className="gap-3 mt-4 sm:flex">
              <input
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => { setCoupon(e.target.value); setCouponMsg(null); }}
              />
              <button onClick={() => { if (!user) return setShowModal(true); applyCoupon(); }} className="px-5 py-3 mt-3 text-white bg-blue-600 rounded-lg sm:mt-0">Apply</button>
            </div>
            {couponMsg && (
              <p className={`mt-3 text-sm ${couponMsg.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{couponMsg.text}</p>
            )}
            <div className="mt-4 text-sm text-gray-600">Suggested: <button onClick={() => setCoupon('LEARNNOW10')} className="text-blue-600 underline">LEARNNOW10</button> • <button onClick={() => setCoupon('WELCOME5')} className="text-blue-600 underline">WELCOME5</button></div>
          </div>
        </section>

        <aside className="lg:col-span-1">
          <div className="sticky space-y-4 top-6">
            <div className="p-6 shadow-lg bg-gradient-to-br from-white to-blue-50 rounded-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-gray-500">Total</div>
                  <div className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</div>
                </div>
                <div className="text-sm text-right text-gray-500">Original <div className="text-gray-400 line-through">${course.price.toFixed(2)}</div></div>
              </div>
              {appliedDiscount > 0 && <div className="mt-3 text-sm text-green-600">You saved ${appliedDiscount.toFixed(2)}</div>}

              <div className="mt-5">
                <h4 className="text-sm font-medium text-gray-700">Payment method</h4>
                <div className="grid grid-cols-1 gap-3 mt-3">
                  {paymentMethods.map(m => (
                    <PaymentMethod key={m.id} {...m} selected={selectedPayment === m.id} onSelect={setSelectedPayment} />
                  ))}
                </div>
              </div>

              {selectedPayment === 'card' && (
                <div className="p-3 mt-4 bg-white border rounded-md">
                  <label className="text-xs text-gray-600">Card number</label>
                  <input className="w-full px-3 py-2 mt-1 border rounded-md" placeholder="1234 5678 9012 3456" />
                </div>
              )}

              <button
                onClick={() => {
                  if (!user) return setShowModal(true);
                  handlePay();
                }}
                disabled={processing}
                className={`w-full mt-5 py-3 rounded-lg text-white font-semibold ${processing ? 'bg-gray-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.01]'} transition-all`}
              >
                {processing ? 'Processing…' : `Pay ${total.toFixed(2)}`}
              </button>

              <div className="mt-4 text-xs text-gray-500">Secure transaction • 30-day money-back guarantee</div>
            </div>
          </div>
        </aside>
      </div>

      <RegisterRequiredModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSignUp={() => { setShowModal(false); navigate('/sign-up', { state: { from: location.pathname } }); }}
        onLogin={() => { setShowModal(false); navigate('/login', { state: { from: location.pathname } }); }}
      />
    </main>
  );
};

export default PurchaseCourse;