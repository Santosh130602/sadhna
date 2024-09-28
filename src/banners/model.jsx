


import React, { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import eventImage from '../assets/vayam1.jpg';

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleRegisterClick = () => {
    navigate('/donate');
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="flex flex-col relative rounded-lg min-w-[60%] max-w-[90%] h-[90vh] overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${eventImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
            zIndex: 0,
          }}
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-1 text-gray-100 hover:text-gray-800"
        >
          <FaTimes size={24} />
        </button>

        <div className="flex-1 flex justify-center items-end  mb-8 mr-48 relative z-10">
          <button
            onClick={handleRegisterClick}
            className="bg-red-500 text-white py-2 px-6 rounded transition hover:bg-blue-700 mb-4 blink-animation"
          >
            Register
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;
