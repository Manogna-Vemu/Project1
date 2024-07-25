import One from "./One";
import Two from "./Two";

function Three()
{
    const name="Manogna Vemu";
    const Branch="IT";
    const year="3";
    const cname="SVECW";
    return(
            <div>
                    <h1>{name}</h1>
                    <h2>{Branch}</h2>
                    <h3>{year}</h3>
                    <h4>{cname}</h4>
                    <One/>
                    <Two/>
            </div>
        );
}

export default Three;