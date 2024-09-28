

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8 md:p-12 my-10"  style={{ fontFamily: 'Gowun Batang, serif' }}>
        <h1 className="text-6xl text-center text-red-400 mb-16">
          Privacy Policy
        </h1>
        <div className="text-gray-400 space-y-6 leading-relaxed">
          <p className="text-lg">
            We are committed to protecting your privacy. This privacy policy
            explains how we collect, use, and protect the personal information
            you provide to us.
          </p>

          <h2 className="text-2xl font-semibold text-red-300">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information such as your name, email address,
            and contact details when you voluntarily submit it to us through
            forms on our website. We may also collect demographic information,
            payment information, and any other information you provide us
            voluntarily.
          </p>

          <h2 className="text-2xl font-semibold text-red-300">
            2. Use of Information
          </h2>
          <p>
            The information we collect is used to process donations, provide
            you with information about our services, respond to your inquiries,
            and improve our offerings. We may also use your information to
            communicate updates about our programs and events.
          </p>

          <h2 className="text-2xl font-semibold text-red-300">
            3. Data Security
          </h2>
          <p>
            We use industry-standard security measures to protect your data
            from unauthorized access, but no method of transmission over the
            internet is 100% secure. We strive to protect your personal
            information, but you acknowledge that there are security and
            privacy limitations inherent to the internet which are beyond our
            control.
          </p>

          <h2 className="text-2xl font-semibold text-red-300">
            4. Sharing Information
          </h2>
          <p>
            We do not share your personal information with third parties unless
            required by law or to protect our rights. We may share your
            information with service providers who assist us in operating our
            website and conducting our programs, provided they agree to keep
            your information confidential.
          </p>

          <h2 className="text-2xl font-semibold text-red-300">
            5. Refund Policy
          </h2>
          <p>
            Thank you for your interest in our services. Please note that all
            payments made are non-refundable. Once a transaction has been
            processed, we do not provide refunds or exchanges for any services
            rendered. We recommend that you carefully review your order before
            completing the payment process to ensure that it meets your
            requirements. If you have any questions or concerns about your
            order, please contact our support team before making your payment.
          </p>

          <h2 className="text-2xl font-semibold text-red-300">
            6. Changes to Privacy Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with a new effective date. We
            encourage you to review this privacy policy periodically for any
            updates.
          </p>

          <h2 className="text-2xl font-semibold text-red-300">
            7. Contact Information
          </h2>
          <p>
            For any privacy concerns or questions, you can contact us at
            sk4bharat@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
