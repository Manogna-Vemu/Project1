function Five(){
    const val=true;
    //conditional rendering
    return(
        <div>
            {val ? <h1>truee</h1> : <h1>False</h1>}
        </div>
    )
}
export default Five;