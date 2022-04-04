import React, { useEffect } from 'react';
import classes from './CartSidebar.module.css';

const CartSidebar = ({ width, isSidebarOpen, setIsSidebarOpen, position, children }) => {
    // overflow is hidden and shown based on sidebar open and close
    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        isSidebarOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    }, [isSidebarOpen]);

    return (
        <div
            onClick={() => setIsSidebarOpen(false)}
            className={`${classes.sidebar} ${isSidebarOpen && classes.sidebarOpen}`}
        >
            <div
                style={{ width }}
                onClick={(e) => e.stopPropagation()}
                className={`${classes.sidebarBody} ${position === 'left' && classes.sidebarPositionRight
                    }`}
            >
                {children}
            </div>
        </div>
    );
};

export default CartSidebar;