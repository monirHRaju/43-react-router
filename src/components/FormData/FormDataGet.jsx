import React from 'react';

const FormDataGet = () => {
    const handleGetData = (formData) => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
        
    }
    return (
        <div>
            <form action={handleGetData} >
                <input type="text" name="name" /> <br />
                <input type="email" name="email" /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p><small>See README.md For all forms</small></p>
        </div>
    );
};

export default FormDataGet;