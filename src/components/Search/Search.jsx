import React, { useState } from 'react';
import { Button } from '../Button';
import { useSelector } from 'react-redux';
import './style.scss';

export const Search = (props) => {
    const { onChangeInput } = props;
    const q = useSelector(state => state.repositories.q);
    const [inputText, setInputText] = useState(q);
    const [isError, setIsError] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        if (inputText.length === 0) {
            setIsError(true);
        } else {
            setIsError(false);
            onChangeInput(inputText);
        }
    }

    const onChange = (event) => {
        setInputText(event.target.value);
    }


    return (
        <form className='search-form' action="/">
            <label htmlFor="searchForm">Search form:</label>
            <div className="search-form__container">
                <input
                    className="search-form__field"
                    required
                    type="text"
                    id='searchForm'
                    placeholder='Enter name of repositories'
                    value={inputText}
                    onChange={onChange}
                />
                <Button type='submit' onClick={handleClick} text='search' size='button--large' />
                {
                    isError ? (<div className='search-form__error'>Field Is Empty!!!</div>) : <div />
                }
            </div>


        </form>
    );
}
