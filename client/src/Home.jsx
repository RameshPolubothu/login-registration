import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    // Get the current year dynamically
    

    return (
        <div style={styles.container}>
            <h1>Welcome Home</h1>
            <div style={styles.buttonContainer}>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </div>

        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    buttonContainer: {
        marginTop: '20px', // Adjust spacing between heading and button
    },
};

export default Home;
