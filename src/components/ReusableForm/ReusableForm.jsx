import { Children } from "react";

// eslint-disable-next-line react/prop-types
const ReusableForm = ({formTitle, handleSubmit, submitBtnText='Submit', Children }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    // const handleSubmit = e =>{
    //     e.preventDefault();
    // }


    return (
        <div>
            {Children}
            <form onSubmit={handleLocalSubmit}>
                <input type="name" name="name" placeholder="Name.."/>
                <br />
                
                <input type="phone" name="phone" placeholder="Phone.."/>
                <br /> 
                
                <input type="email" name="email" placeholder="Email.."/>
                <br />
                
                
                <input type="password" name="password" placeholder="password.."/>
                <br />

                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;