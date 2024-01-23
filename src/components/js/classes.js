import React from 'react';
import beastmasterImage from '../../assets/classes/beastmaster.jpg';
import mageImage from '../../assets/classes/mage.jpg';
import chevalierImage from '../../assets/classes/chevalier.jpg';
import druideImage from '../../assets/classes/druide.jpg';
import "../css/classes.css"

const ClassRpgName = () => {
    const pathClassesPictures = [beastmasterImage, mageImage, chevalierImage, druideImage];
    const nameClass = ["Beast Master", "Mage", "Chevalier", "Druide"];

    return (
        <div className="menu">
            <div className={nameClass[0]}>
                <img src={pathClassesPictures[0]} alt={nameClass[0]} />
                <p>{nameClass[0]}</p>
            </div>
            <div className={nameClass[1]}>
                <img src={pathClassesPictures[1]} alt={nameClass[1]} />
                <p>{nameClass[1]}</p>
            </div>
            <div className={nameClass[2]}>
                <img src={pathClassesPictures[2]} alt={nameClass[2]} />
                <p>{nameClass[2]}</p>
            </div>
            <div className={nameClass[3]}>
                <img src={pathClassesPictures[3]} alt={nameClass[3]} />
                <p>{nameClass[3]}</p>
            </div>
            
        </div>
    );
};

export default ClassRpgName;
