import React from "react";
import { useSelector } from "react-redux";
import './infoSection.scss';
import { productInfo } from '../../../store/stacklineSlice';

export const InfoSection = () => {
    const {image, title, subtitle, tags} = useSelector(productInfo)
    return (
        <div className="infoSection">
            <img src={image} alt="ninja bullet product" />
            <h2>{title}</h2>
            <h6>{subtitle}</h6>
            <ul className="tags">
                {tags.map((ele, i) => <li key={i}>{ele}</li>)}
            </ul>
        </div>
    )
}