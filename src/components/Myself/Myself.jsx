import Spacial from "../Spacial/Spacial";

// eslint-disable-next-line react/prop-types
const Myself = ({asset}) => {
    return (
        <div>
          <h2>Me</h2>
            <section>
                <Spacial asset={asset} name={'my Dear: saida noor '}></Spacial>
            </section>
        </div>
    );
};

export default Myself;