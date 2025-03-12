import React, { useState, useEffect } from 'react';
import "./Results.css";
import Title from '../../Components/Title/Title';
import { Link, useLocation } from "react-router-dom";
import Sidebar from '../../Components/Sidebar/sidebar';

const Result = () => {
    const location = useLocation();
    console.log("Received prediction:", location.state); // Debugging

    const prediction = location.state || {}; // Fix destructuring
    console.log("Extracted Prediction:", prediction);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        setMobileMenu(prev => !prev);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Simulate a loading delay (e.g., fetching results)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="model_container">
              <Title subTitle={" "} title='Malaria Detection AI' />
                <Sidebar/>
                <div className="content">
                    {loading ? (
                        <p className="loading-text">⌛ Analyzing Image...</p>
                    ) : prediction.class ? (  // Ensure class exists
                        <div className={`result-card ${prediction.class === "parasitized" ? "parasitized" : "uninfected"}`}>
                            <p className={`result-text ${prediction.class === "parasitized" ? "high-risk-text" : "low-risk-text"}`}>
                                {prediction.class === "parasitized" ? "⚠️ Malaria Detected" : "✅ No Malaria Detected"}
                            </p>
                        </div>
                    ) : (
                        <p className="error-text">❌ Error: No result available</p>
                    )}

                    <div className="result-actions">
                        <Link to="/model" className="btn">Try Again</Link>
                        <Link to="/" className="btn">Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;
