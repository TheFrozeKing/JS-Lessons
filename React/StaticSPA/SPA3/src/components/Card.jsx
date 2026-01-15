import Label from "./Label";
import styles from "./styles/Card.module.css"
import heartIcon from "../images/heart.svg";
import filledHeartIcon from "../images/filledheart.svg";

import {useState} from "react";

export default function Card({item}) {
    const [like, setLike] = useState(false);
    
    const handleLike = () => {
        setLike(!like);
    }

    const renderLike = () => {
        return like ? filledHeartIcon : heartIcon
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.image}></div>
            <div className={styles.likeButton} onClick={handleLike}>
                <img alt = "fav" src={renderLike()}></img>
            </div>
            <div className={styles.namePlate}>
                <Label text = {item.name} fontSize="1vw" fontWeight="600" color="black"/>
                <Label text = {item.description} fontSize="1vw" fontWeight="500" color="gray"/>
                <Label text = {item.price} fontSize="1vw" fontWeight="500" color="black"/>
            </div>
        </div>
    );
};