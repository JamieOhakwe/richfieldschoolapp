import React, { useState } from 'react';

const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose(); // Call optional onClose callback
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <span> This is my Modal</span>
          <div className="modal-content">{children}</div>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default Modal;
