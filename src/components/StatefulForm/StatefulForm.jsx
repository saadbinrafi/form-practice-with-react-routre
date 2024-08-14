import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);

    const [error, setError] = useState ('');



    const handleNameChange = e => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    const handlePhoneChange = e => {
        setPhone(e.target.value);
        console.log(e.target.value);

    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);

        if(password.length < 6){
            setError('password must be 6 characters or longer ')
        }else{
            setError('')
        }
        console.log(e.target.value)

    }

    




    const handleSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(password);

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <input
                    onChange={handleNameChange}
                
                type="text" name="name" placeholder="Name.."/>
                

                <input 
                    onChange={handlePhoneChange}
                
                type="text" name="phone" placeholder="Phone.." required/>
                
                <br />
                
                <input
                    onChange={handleEmailChange}
                
                type="text" name="email" placeholder="Email.."/>
                
                

                <input 
                    onChange={handlePasswordChange}
                
                type="text" name="password" placeholder="password.." required/>
                <br />
                
                
                <input type="submit" value="Submit" />

                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;