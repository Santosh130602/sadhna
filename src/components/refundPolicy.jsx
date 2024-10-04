

import React from "react";

const RefundPolicy = () => {
  return (
    <div className="flex bg-yellow-100 justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-yellow-200 shadow-lg rounded-lg w-full max-w-4xl p-8 md:p-12 my-10"  style={{ fontFamily: 'Gowun Batang, serif' }}>
        <h1 className="text-6xl text-center text-red-800 mb-16">
          Refund Policy 
        </h1>
        <div className="text-gray-900 space-y-6 leading-relaxed">
          <p>
            Thank you for your interest in our services. Please note that all
            payments made are non-refundable. Once a transaction has been
            processed, we do not provide refunds or exchanges for any services
            rendered. We recommend that you carefully review your order before
            completing the payment process to ensure that it meets your
            requirements. If you have any questions or concerns about your
            order, please contact our support team before making your payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
