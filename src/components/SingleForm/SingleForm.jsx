import React from 'react';

const SingleForm = () => {
    const handleFormDate = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        console.log(name, email);
        
    }
    return (
        <div>
            <form action='' onSubmit={handleFormDate}>
                <input type="text" name='name'/>
                <br />
                <input type="email" name='email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p><small>See README.md For all forms</small></p>

        </div>
    );
};

export default SingleForm;