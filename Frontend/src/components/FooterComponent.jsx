import React from 'react'

const FooterComponent = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <span className="text-muted">
                All Rights Reserved {currentYear}
            </span>
        </footer>
    );
};

export default FooterComponent;