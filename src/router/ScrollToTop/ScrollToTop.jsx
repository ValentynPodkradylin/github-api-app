import React from 'react'
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, -100);
    }, [pathname]);

    return null;
};
