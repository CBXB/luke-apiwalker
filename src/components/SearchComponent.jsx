import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const SearchComponenet = (props) => {
    const [formState, setFormState] = useState ({ 
        id: props.id,
        category: props.category
    });

    const [responsedata, setResponseData] = useState ([]);

    const onChangeHandler = e => {
        setFormState({
            ...formState, [e.target.name] : e.target.value
        });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.get(`https://swapi.dev/api/${formState.category}/${formState.id}`)
            .then(response=>{setResponseData(response.data)})
            .catch(err => console.log(err));
        navigate(`/${formState.category}/${formState.id}`)
    };

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${formState.category}/${formState.id}`)
            .then(response=>{setResponseData(response.data)})
            .catch(err => {
                console.log(err);
                alert("These are not the droids you are looking for");
            });
    }, []);


    return(
        <div>
            <h1>Luke APIwalker</h1>
            <form onSubmit={onSubmitHandler}>
                <label>Search For: </label>
                <select name="category" onChange={onChangeHandler}>
                    <option value="people">Person</option>
                    <option value="planets">Planet</option>
                    <option value="starships">Starship</option>
                </select>
                <br/>
                <label>ID: </label>
                <input type="text" name="id" onChange={onChangeHandler}/>
                <br/>
                <input type="submit"/>
            </form>
            <br></br>
            {Object.keys(responsedata).map((item) =>
            <p>{item}: {responsedata[item]}</p> 
            )}
        </div>
    )


}

export default SearchComponenet;
