import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Descriptions } from 'antd';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
export default function VerifiedSeller() {
    const history=useHistory();
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        axios.get("https://startup-v1.herokuapp.com/api/admin/seller-requests").then(({data})=> {
            setRequests([...data.data]);
        })
    },[])
    return (
        <div>
           {
               requests.map(seller=>(
                    <>
                         <Link to={`/seller/${seller.userId}`}><Descriptions title={seller.name}>
                         <Descriptions.Item label="UserId">{seller.userId}</Descriptions.Item>
                         <Descriptions.Item label="_Id">{seller._id}</Descriptions.Item>
                            <Descriptions.Item label="UserName">{seller.username}</Descriptions.Item>
                            <Descriptions.Item label="createAt">{seller.createdAt}</Descriptions.Item>
                            <Descriptions.Item label="">{seller.isVerified}</Descriptions.Item>
                        </Descriptions></Link>
                    </>
               ))
           }
           
        </div>
    )
}
