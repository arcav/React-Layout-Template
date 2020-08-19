import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer'


const Index = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};

export default Index;
