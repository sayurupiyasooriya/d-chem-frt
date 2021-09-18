import React, { useState, useEffect } from 'react'
import './card.scss'
import axios from 'axios'

// importing component
import FieldService from '../../services/field.service';

const { REACT_APP_API_URL } = process.env;
const { getCourseImg } = FieldService;

export default function Card(props) {

  //   const [CourseImage, setCourseImage] = useState({})

  //   const imgLocation = props.courseData.image.imgLocation

  // useEffect(()=>{
  // axios.get(REACT_APP_API_URL+imgLocation,
  //   {
  //     responseType:"arraybuffer",
  //   }
  //   ).then((e)=>{
  // setCourseImage(Buffer.from(e.data, "binary").toString("base64"))
  // })
  // },[])

  // console.log(CourseImage)
  return (
    <div className="card col-sm-3">
      {/* <img className="card-img-top" src={`data:jpeg/png;charset=utf-8;base64,${CourseImage}`} alt="Card  cap" /> */}
      <div className="card-body">
        <p className="card-text-h">{props.fieldData.name}</p>
        {/* <p className="card-text">{props.fieldData.description}</p> */}
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  )
}
