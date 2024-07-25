//Another set of data fetching from another API
import { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await axios.get('https://fakestoreapi.com/users');
            setData(res.data);
            console.log(res.data);
        };

        fetchMyData();
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Address</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataItem) => (
                        <tr key={dataItem.id}>
                            <td>{dataItem.id}</td>
                            <td>{dataItem.email}</td>
                            <td>{dataItem.username}</td>
                            <td>{dataItem.password}</td>
                            <td>{dataItem.address.street}</td>
                            <td>{dataItem.address.city}</td>
                            <td>{dataItem.address.zipcode}</td>
                            <td>{dataItem.name.firstname}</td>
                            <td>{dataItem.name.lastname}</td>
                            <td>{dataItem.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataFetching;

/*import { useEffect, useState } from "react"       
import axios from "axios";


function DataFetching(){
    //create a state variable to assign response JSON
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData=async()=>{
            //await() fxn works only in asynchronous async() fxn
            /* To fetch data from APIs using Asynchronous await in ReactJS we will make an API request. 
            Fetching data is an asynchronous process which means it does not update instantly and takes time to fetch the data. 
            The await keyword enables the assignment to state when data is available and is completely fetched. 
            const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
            const resData=await response.data;
            setData(resData);
            console.log(data);
        }
        fetchMyData();
    });
    return(
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">UserId</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataItem,index)=>
                    <tr key={index}>
                        <td>{dataItem.id}</td>
                        <td>{dataItem.userid}</td>
                        <td>{dataItem.title}</td>
                        <td>{dataItem.body}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default DataFetching;*/


/*                 *****this is by using fetch but now we are using axios to get data fron

import { useEffect, useState } from "react"

function DataFetching(){
    //create a state variable to assign response JSON
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData=async()=>{
            //await() fxn works only in asynchronous async() fxn
            /* To fetch data from APIs using Asynchronous await in ReactJS we will make an API request. 
            Fetching data is an asynchronous process which means it does not update instantly and takes time to fetch the data. 
            The await keyword enables the assignment to state when data is available and is completely fetched. 
            const response=await fetch('https://jsonplaceholder.typicode.com/posts');
            const resData=await response.json();
            setData(resData);
            console.log(data);
        }
        fetchMyData();
    });
    return(
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">UserId</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataItem,index)=>
                    <tr key={index}>
                        <td>{dataItem.id}</td>
                        <td>{dataItem.userid}</td>
                        <td>{dataItem.title}</td>
                        <td>{dataItem.body}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default DataFetching;*/