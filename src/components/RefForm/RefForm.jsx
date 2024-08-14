import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect( () => {
        nameRef.current.focus();

    },[])



    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(phoneRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }



    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="name" name="name" placeholder="Name.."/>
                <br />
                

                <input ref={phoneRef} type="phone" name="phone" placeholder="Phone.."/>
                <br />
                
                <input ref={emailRef } type="email" name="email" placeholder="Email.."/>
                <br />


                <input ref={passwordRef} type="password" name="password" placeholder="Password.."/>
                <br />
                
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;