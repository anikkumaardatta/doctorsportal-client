import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
            <button className="btn rounded-md bg-gradient-to-r from-secondary to-primary text-white border-0 hover:bg-secondary hover:shadow-2xl hover:shadow-primary/50 duration-700">
              {children}
            </button>
    );
};

export default PrimaryBtn;