
const SimpleForm = () => {


    const handleSubmit = e =>{

        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

        console.log('form submit')
    }








    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="name" name="name" placeholder="Name.."/>
                <br />
                
                <input type="phone" name="phone" placeholder="Phone.."/>
                <br />
                
                <input type="email" name="email" placeholder="Email.."/>
                <br />
                
                
                <input type="password" name="password" placeholder="password.."/>
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;