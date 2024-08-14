import Cousin from "../Cousin/Cousin";

// eslint-disable-next-line react/prop-types
const Aunty = ({asset}) => {
    return (
        <div>
            <h2>Aunty</h2>   
                <section className="flex">
                    <Cousin name={'Arshad'} asset={asset}></Cousin>
                    <Cousin name={'Rubaiya'}></Cousin>
                </section>         
        </div>
    );
};

export default Aunty;