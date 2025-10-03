import React, { useRef } from 'react';

const FormUseRef = () => {

        const emailRef = useRef('');
        const passwordRef = useRef('');

    const handleForm = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passwordRef.current.value
       
        console.log(email, pass);
        console.log(passwordRef.current);
        
    }

    return (
        <div>
            <form action="" onSubmit={handleForm}>
                <input type="email" ref={emailRef}  /><br />
                <input type="password" ref={passwordRef} />  <br />

                <input type="submit" value="Submit" />
            </form>
            <p><small>See README.md For all forms</small></p>
        </div>
    );
};

export default FormUseRef;