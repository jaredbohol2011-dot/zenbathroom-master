"use client";

import React, { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Your business phone number (with country code)
  const phoneNumber = "353894219421";

  // Default message for customers
  const defaultMessage =
    "Hi! I'm interested in your services. Could you please provide more information?";

  const handleWhatsAppClick = () => {
    const finalMessage = message.trim() || defaultMessage;
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 w-64 sm:w-80 md:w-96">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Customer Support</h3>
                <p className="text-xs opacity-90">We're here to help!</p>
              </div>
            </div>
            <button
              onClick={toggleWidget}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-2 sm:p-3 mb-3">
                <p className="text-xs sm:text-sm text-gray-700">
                  👋 Hello! How can we help you today?
                </p>
              </div>
              <p className="text-xs text-gray-500 mb-3">
                Click the button below to start a WhatsApp conversation with us.
              </p>
            </div>

            {/* Message input */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Your message (optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={defaultMessage}
                className="w-full p-3 border border-gray-200 rounded-lg text-sm resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                rows={3}
              />
            </div>

            {/* WhatsApp button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start WhatsApp Chat</span>
            </button>

            {/* Contact info */}
            <div className="mt-3 flex items-center justify-center space-x-1 text-xs text-gray-500">
              <Phone className="w-3 h-3" />
              <span>+353 89 421 9421</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating action button */}
      <button
        onClick={toggleWidget}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Notification badge */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          1
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
