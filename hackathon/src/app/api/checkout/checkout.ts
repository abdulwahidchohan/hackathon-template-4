import { useState } from 'react';

const CheckoutFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [formErrors, setFormErrors] = useState({}); // State for form errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the changed field
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    // Add more validation as needed (email format, card number format, etc.)
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return; // Stop submission if there are errors
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || 'Payment failed'); // Optional chaining
      }

      console.log('Order submitted:', formData);
      alert('Order placed successfully!');
      setFormData({ name: '', email: '', address: '', cardNumber: '', expiryDate: '', cvv: '' });
      setStep(1);
    } catch (error) {
      console.error('Error submitting order:', error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" className="w-full px-4 py-2 mb-2 border rounded" required />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>} {/* Error display */}

            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full px-4 py-2 mb-2 border rounded" required />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>} {/* Error display */}

            <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="w-full px-4 py-2 mb-2 border rounded" required />

            <button type="button" onClick={() => setStep(2)} className="w-full bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="Card Number" className="w-full px-4 py-2 mb-2 border rounded" required />
            <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} placeholder="MM/YY" className="w-full px-4 py-2 mb-2 border rounded" required />
            <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="CVV" className="w-full px-4 py-2 mb-2 border rounded" required />
            <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded">Place Order</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutFlow;