import Spacial from "../Spacial/Spacial";

// eslint-disable-next-line react/prop-types
const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
               { asset &&  <Spacial asset={asset}></Spacial>}
            </section>
        </div>
    );
};

export default Cousin;