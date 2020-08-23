import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './../../StateProvider/StateProvider';
import { actionTypes } from '../../StateProvider/reducer';


function Search({ hideButtons = false }) {
    const [input, setInput] = useState("");
    const [{}, dispatch] = useStateValue();
    const history = useHistory();

    const search = e => {
        e.preventDefault();

        history.push('/search');

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button className="search__buttonHidden" type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button className="search__buttonHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
            
        </form>
    )
}

export default Search
