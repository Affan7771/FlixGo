import React from 'react'

const CardCover = ({ image, title, link, rate, category }) => {
    
    return (
        <>
            <div className="card__cover">
                <img src={image} alt="" />
                <a href={link || "#"} className="card__play">
                    <i className="icon ion-ios-play"></i>
                </a>
            </div>
            <div className="card__content">
                <h3 className="card__title">
                    <a href={link || "#"}>{title}</a>
                </h3>
                <span className="card__category">
                    {category && category.map((cat, index) => (
                        <a key={index} href={link || "#"}>{cat}</a>
                    ))}
                </span>
                <span className="card__rate">
                    <i className="icon ion-ios-star"></i>{rate}
                </span>
            </div>
        </>
    )
}

export default CardCover