function Six()
{
    const names=["name1","name2","name3","name4","name5"];
    return (
        <div>
            <ul>
                {names.map((names,index) => <li key={index}>{names}</li>)}
            </ul>
        </div>
    );
}
export default Six;
