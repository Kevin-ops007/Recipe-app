import React from 'react'

const Recipe = ({recipe}) => {
    const{label,image,url,source}=recipe.recipe
    return (
        <div className="recipe">
            
            <img src={image} alt={label} />
            <h2>{label}</h2>
            <h2 style={{color:'black'}}>Publisher:{source}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <button>Recipe</button>
            </a>     
        </div>
    )
}

export default Recipe
