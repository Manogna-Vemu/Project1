function CardUI(props)
{
    const width=200;
    return (
        <div className="card" style={{width: '18rem'}}>
           <img src="/profile.jpeg" width={200} 
            style={{border:'10px solid #FF0000',borderRadius:'130px'}}/>
            <div className="card-body">
            <h1>{props.user.name}</h1>
            <h1>{props.user.branch}</h1>
            <h1>{props.user.year}</h1>
            <button type="button" class="btn btn-primary">Connect</button>
            </div>
  </div>
    );
}
export default CardUI;