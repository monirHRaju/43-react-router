import React, { useState } from 'react';

const FormData = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const handleFormData = (e) => {
        e.preventDefault()

    }
    const handleName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)

        if(name.length < 4){
            setError('name must be above 4 characters')
        } else {
            setError('')
        }

    }
    return (
        <div>
            <form action='' onSubmit={handleFormData}>
                <input type="text" onChange={handleName} name='name' defaultValue={name}/>
                <br />
                <input type="email" name='email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>{error}</p>
            <p><small>See README.md For all forms</small></p>
        </div>
    );
};

export default FormData;