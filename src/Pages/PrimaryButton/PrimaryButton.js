import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <>
        <button className="btn bg-gradient-to-r from-secondary to-primary hover:from-pink-500 hover:to-yellow-500 text-white font-semibold">
              {children}
        </button>
        </>
    );
};

export default PrimaryButton;