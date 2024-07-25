function Review()
{
    const name=["Reviewer1 Name","Reviewer2 Name"];
    const comment=["This product is good","this product is not Bad"];

    return(
        <div>
            <h1>Reviews</h1>
            <img src="/icon.png" alt="icon" width="70" height="50"></img>
           <ul type="none">
                {name.map((name,index) => 
                    (
                        <li key={index}>
                            {name}<br/>
                            {comment[index]}
                        </li>
                    ))}
            </ul>
        </div>
    );

}
export default Review;