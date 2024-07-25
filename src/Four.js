function Four(){
    const names=["Chotu","Ruby","Rocky", "Tommy"];
    const namelist=names.map((names,index) => <li key={index}>{names}</li>);
    return(
        <div>
            <h1>Names of My Pets</h1>
            <ul>{namelist}</ul>
        </div>
    );
}

export default Four;