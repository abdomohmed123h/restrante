import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Catgroyprodect() {
    const { catname } = useParams();  // Extract category name
    const navigate = useNavigate();

    useEffect(() => {
        const validRoutes = ["burger", "pasta", "pizza"];
        if (!validRoutes.includes(catname)) {
            navigate("/error");  // Correct syntax for navigation
        }
    }, [catname, navigate]);  // Dependency array

    return <div>Category Product: {catname}</div>;
}
