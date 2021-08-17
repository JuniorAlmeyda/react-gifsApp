
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterXHunter'] );
    //     setCategories( category => [...category, inputValue] );
    // }

    return (
        <>

            <h2>GifExpertApp</h2>

            <AddCategory setCategories = { setCategories } />

            <hr />

            {/* <button onClick={handleAdd} >Agregar</button> */}

            <ol>
                { 
                    categories.map( category => {
                        return <GifGrid
                                    key = {category}  
                                    category = {category} 
                                />
                    }) 
                }
            </ol>

        </>
    )

}

export default GifExpertApp;

