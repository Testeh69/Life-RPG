import React from 'react';
import beastmasterImage from '../../assets/classes/beastmaster.jpg';
import mageImage from '../../assets/classes/mage.jpg';
import chevalierImage from '../../assets/classes/chevalier.jpg';
import druideImage from '../../assets/classes/druide.jpg';
import "../css/classes.css"

const ClassRpgName = ({className}) => {
    const pathClassesPictures = [beastmasterImage, mageImage, chevalierImage, druideImage];
    const nameClass = ["Dompteur", "Mage", "Chevalier", "Druide"];
    var classChoosen;

    const handleClassClick = (classIndex) => {
        classChoosen = nameClass[classIndex];
        console.log(`selected class: ${classChoosen}`)
    }


    const sendDataClass = (dataClassSend) =>{
        console.log(dataClassSend)
    }
    return (
        <div className={`menu ${className}`}>
            <div className='menu-choice-class'>
            {pathClassesPictures.map((data, idx) => (
                <div className={`img-class ${data}`} key={idx} onClick={() => handleClassClick(idx)}>
                    <img src={data} alt={nameClass[idx]} />
                    <h3 className={data}>{nameClass[idx]}</h3>
                </div>
            ))}
            </div>
            <button className="btn-validate" onClick={()=> sendDataClass(classChoosen)}>Valider</button>
        </div>
    );
};

export default ClassRpgName;

