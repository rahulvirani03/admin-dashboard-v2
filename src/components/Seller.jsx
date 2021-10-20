import React,{useState,useEffect} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import {getSrcFromBuffer} from '../utils'

import axios from 'axios';
import { Button, Image } from 'antd';
export default function Seller() {
    const history=useHistory();
    const {id}=useParams();
    console.log(id);
    const [requests, setRequests] = useState({});
    useEffect(() => {
        axios.get("https://startup-v1.herokuapp.com/api/admin/seller/request/"+id).then(({data})=> {
            setRequests(data.data);
            console.log(data.data);
        })

    },[])
    const handleClick= async () => {
        console.log(requests._id);
       const {data} = await axios.post("https://startup-v1.herokuapp.com/api/admin/seller/request/verify/"+requests._id)
       console.log(data.data);
       history.replace("/dashboard?key=verified-seller")

    }
    return (
        <>{requests && <div>
            <p>{requests.name}</p>
            <p>{requests.selectedDocument}</p>
            <p>{requests.phoneNo}</p>
            <p><Image width="250px" src={requests.document && getSrcFromBuffer(requests.document)}/></p>
            {requests.storeImages?.length && requests.storeImages.map(strimg =>
             {console.log(strimg)
              return <p> <Image width="250px" src={getSrcFromBuffer(strimg)}/></p>}
            )}
           <Button onClick={handleClick} type="primary">Approve</Button> 
           <Button type="danger">Reject</Button> 

        </div>}</>
    )
}


 {/* aadharOrPan: "BTMPV7266B"
address: "Holaram colony "
authType: "manual"
businessName: "Rahul Foods And General Rahul"
createdAt: "2021-10-11T12:48:44.114Z"
description: "Djduehsush"
document: {filename: 'Screenshot_20211006-203518.jpg1633956608991.jpeg', file: {…}}
email: "rahulsvirani25@gmail.com"
gstin: "27AABCU9603R1ZN"
isSeller: false
name: "Rahul Virani"
password: "$2b$10$imN9M/6cdeEcgSfCOVrKOu.9FWm5w9g6AYFoOWhHomzj/wg3BJb12"
phoneNo: "7798277741"
profileImage: {file: {…}}
selectedDocument: "PAN"
storeImages: [{…}]
updatedAt: "2021-10-14T04:13:59.281Z"
username: "rahulsvirani25"
__v: 0
_id: "616432accf69600016b47344"
[[Prototype]]: Object */}