import React from 'react';

const ChatIcon = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '48px',
        height: '48px',
        cursor: 'pointer',
        zIndex: 1000,
        backgroundColor: 'black', // black background
        borderRadius: '50%',       // make it round
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)', // optional subtle shadow
      }}
    >
      <svg
        width="24"
        height="24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        style={{ color: 'white' }} // white icon
      >
        <use xlinkHref="#book" />
      </svg>
    </div>
  );
};

export default ChatIcon;
