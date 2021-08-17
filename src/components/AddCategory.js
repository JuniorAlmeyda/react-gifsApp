import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value); //obtienes el valor del campo y puedes escribir dentro del input
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //para no recargar la página al enviar el form

        if( inputValue.trim().length > 0 ){
            console.log('submit hecho');
            setCategories( category => [inputValue, ...category] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type = "text"
                value = { inputValue } 
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
