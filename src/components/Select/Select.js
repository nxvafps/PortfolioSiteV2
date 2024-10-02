import React, { useState } from 'react';
import Select from 'react-select';

const customStyles = (value, height, width) => ({
    control: (base, state) => ({
        ...base,
        borderRadius: 0,
        height: height,
        width: width,
        minHeight: height,
        borderColor: state.isFocused || !value ? '#ffffff' : 'transparent',
        outline: 'none',
        boxShadow: 'none',
        backgroundColor: '#7b7777',
        color: '#ffffff',
        '&:hover': {
            borderColor: '#ffffff'
        }
    }),
    valueContainer: (base) => ({
        ...base,
        height: height,
        width: width,
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center'
    }),
    input: (base) => ({
        ...base,
        margin: 0,
        padding: 0,
        outline: 'none',
        boxShadow: 'none',
        color: '#ffffff',
        textAlign: 'center',
        textAlignLast: 'center',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    singleValue: (base) => ({
        ...base,
        color: '#ffffff',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        top: '50%', 
        transform: 'translateY(-50%)'
    }),
    indicatorsContainer: (base) => ({
        ...base,
        display: 'none',
    }),
    option: (base) => ({
        ...base,
        borderRadius: 0,
        backgroundColor: '#7b7777',
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#7b7777'
        },
        color: '#ffffff',
        textAlign: 'center'
    }),
    placeholder: (base) => ({
        ...base,
        color: '#ffffff',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        top: '50%', 
        transform: 'translateY(-50%)'
    }),
    menu: (base, state) => ({
        ...base,
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: '#7b7777',
        color: '#ffffff',
        borderColor: state.isFocused || !value ? '#ffffff' : 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid'
    }),
    menuList: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: '#7b7777',
        color: '#ffffff'
    })
});


const Dropdown = ({ options, onChange, placeholder, value, height = 40, width = 200 }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (input) => {
        setInputValue(input);
        
        const matchedOption = options.find(option => option.label.toLowerCase() === input.toLowerCase());
        if (matchedOption) {
            onChange(matchedOption);
            setTimeout(() => document.activeElement.blur(), 0);
        }
    };

    const handleChange = (selectedOption) => {
        onChange(selectedOption);
        setTimeout(() => document.activeElement.blur(), 0);
    };

    return (
        <Select 
            options={options} 
            onChange={handleChange}
            onInputChange={handleInputChange} 
            placeholder= {placeholder}
            isSearchable
            tabSelectsValue
            escapeClearsValue
            styles={customStyles(!!value, height, width)}
            value={value}
            inputValue={inputValue}
        />
    )
};

export default Dropdown;