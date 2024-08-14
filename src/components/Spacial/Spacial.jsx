import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

// eslint-disable-next-line react/prop-types
const Spacial = ({ name, asset }) => {

    const gift = useContext(AssetContext);

    return (
        <div>
            <h2>spacial: {name}</h2>
            <p>has: {asset}</p>
            <p>Also has {gift}</p>
        </div>
    );
};

export default Spacial;