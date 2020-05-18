import React, {useState} from 'react';
import { navigate } from '@reach/router';

const HomeComponenet = (props) => {
    // set the form default state at reload
    const [ formState, setFormState] = useState ({
        id: "",
        category: "people"
    });

    const onChangeHandler = (e) => {
        setFormState ({...formState, [e.target.name] : e.target.value});
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate(`/${formState.category}/${formState.id}`)
    };

    return(
        <div>
            <h1>Luke APIwalker</h1>
            {/* drop down resource list */}
            <form onSubmit={onSubmitHandler}>
                <label>Search For: </label>
                <select name="category">
                    <option value="people">Person</option>
                    <option value="planets">Planet</option>
                    <option value="starships">Starship</option>
                </select>
                <br/>
                {/* ID input field */}
                <label>ID: </label>
                <input type="text" name="id" onChange={onChangeHandler}/>
                <br/>
                {/* submit button */}
                <input type="submit"/>
            </form>
        </div>
    )
    
}
export default HomeComponenet;

