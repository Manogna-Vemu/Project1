import CardUI from "./Card";
function CardListUI()
{
    const userObject={name:"name1",branch:"IT",year:"3"};
    const users=["name1","name2","name3","name4","name5","name6","name7"]
    return (
        <div style={{display:'flex', flexWrap:"wrap"}}>
           {
            users.map((user, index) => (
                <CardUI key={index} user={{...userObject, name: user}} />
            ))
           }
        </div>
    );
}
export default CardListUI;