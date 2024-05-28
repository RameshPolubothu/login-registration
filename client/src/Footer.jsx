import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div style={styles.footer}>
            &copy; {currentYear} R&R. All Rights Reserved.
        </div>
    );
}

const styles = {
    footer: {
        marginTop: '20px',
        fontSize: '14px',
        color: '#777',
        textAlign: 'center', // Center align the text
    },
};

export default Footer;
