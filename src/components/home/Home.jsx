import React, {useEffect, useState} from 'react'
import Card from '../card/Card'
import FieldService from '../../services/field.service';
const {getFields, getCourseImg} = FieldService;

 const  Home = ()=> {

    const [FieldData, setFieldData] = useState([]);

    const fetchFieldData = async()=>{
        getFields().then(e=>{
            setFieldData(e.data)
        })
    }

    

    useEffect(()=>{
        fetchFieldData()
            }, [])
           
    return (
        <div className="home container">
            <div className="row">
                {
                FieldData.map((field, i)=>{
                    return ( <Card key = {field._id} fieldData = {field}/>)
                }) }
            </div>
        </div>
    )
    }

export default Home
