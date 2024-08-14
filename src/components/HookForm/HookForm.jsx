import useInputState from "../../hooks/useInputState";


const HookForm = () => {

    // const [name, handleNameChange] = useInputState('')
    const emailState = useInputState('')



    const handleSubmit = e => {
        console.log('from data ', emailState.value)
        e.preventDefault();
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                
                {/* <input value={name} onChange={handleNameChange} name="name" placeholder="Name.."/> */}
                <br />
                
                <input type="phone" name="phone" placeholder="Phone.."/>
                <br />
                
                <input {...emailState}  type="email" name="email" placeholder="Email.."/>
                <br />
                
                
                <input type="password" name="password" placeholder="password.."/>
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;