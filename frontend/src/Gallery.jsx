import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css'; 
import Header from './header.jsx';

function Gallery() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://galleryviewer.onrender.com/items');
            setItems(result.data);
        };
        fetchData();
    }, []);

    return (
        <>
        <Header></Header>
        <div className="gallery-container">
            {items.map((item, index) => (
                <div key={index} className="gallery-item">
                    <img src={`https://galleryviewer.onrender.com${item.img_url}`} alt={item.name} />
                    <p>{item.img_name}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default Gallery;
