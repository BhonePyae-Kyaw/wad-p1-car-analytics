import React, { useState, useEffect} from 'react';
import hearts from '../assets/constants/hearts';
import '../styles/card.css';

function Cards({ car }) {
    
    const {
        Img600: imageUrl,
        Prc: price,
        Currency: currency,
        NameMMT: name,
        Model: modal,
        Yr: age,
        Province: province,
        Cid,
    } = car;
    
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Check if the car is in the highlights and set the favorite status accordingly
        const highlights = JSON.parse(localStorage.getItem('highlights')) || [];
        const carIsFavorited = highlights.some(item => item.Cid === Cid);
        setIsFavorite(carIsFavorited);
    }, [Cid]);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        // const highlights = JSON.parse(localStorage.getItem('highlights')) || [];
        let highlights = JSON.parse(localStorage.getItem('highlights')) || [];

        if (!isFavorite) {
            // Add car to highlights
            highlights.push(car);
        } else {
            // Remove car from highlights
            // const updatedHighlights = highlights.filter(item => item.Cid !== Cid);
            // localStorage.setItem('highlights', JSON.stringify(updatedHighlights));
            highlights = highlights.filter(item => item.Cid !== Cid);
        }
        
        // localStorage.setItem('highlights', JSON.stringify(highlights));
        localStorage.setItem('highlights', JSON.stringify(highlights));
        console.log("clicked", isFavorite);
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}>
                    
                </div>
                
                <div className="card-details">
                    <div className="heart-icon" onClick={handleFavoriteClick}>
                        <img src={isFavorite ? hearts.heart_fav : hearts.heart_un} alt="Heart Icon" />
                        </div>
                    <p className="card-property-age">{modal} {age}</p>                        
                    <p className="card-price">{price} {currency}</p>
                    <p className="card-name">{name}</p>
                </div>
                <div className="card-features">
                    <div className="feature-item">
                        <p>{province} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Cards;
