import React, { useState } from 'react';

const CheckoutFlow: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment and submit order
    console.log('Order submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h3 className="text-xl mb-2">Personal Information</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 mb-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-2 mb-2 border rounded"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="w-full px-4 py-2 mb-2 border rounded"
              required
            />
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h3 className="text-xl mb-2">Payment Information</h3>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="Card Number"
              className="w-full px-4 py-2 mb-2 border rounded"
              required
            />
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              className="w-full px-4 py-2 mb-2 border rounded"
              required
            />
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
              className="w-full px-4 py-2 mb-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded"
            >
              Place Order
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutFlow;