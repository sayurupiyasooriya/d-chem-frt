import React, { useState, useEffect, useContext } from 'react'
import './card.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FieldContext } from '../../context/FieldContext'
// importing component
import FieldService from '../../services/field.service';

const { REACT_APP_API_URL } = process.env;
const { getCourseImg } = FieldService;


export default function Card(props) {

  const [FieldImage, setFieldImage] = useState({})
  const [fieldName, setFieldName] = useState('')
  const imgLocation = props.fieldData.image.imgLocation
  const [field, setField] = useContext(FieldContext)



  useEffect(() => {
    axios.get(REACT_APP_API_URL + imgLocation,
      {
        responseType: "arraybuffer",
      }
    ).then((e) => {
      setFieldImage(Buffer.from(e.data, "binary").toString("base64"))
    })
  }, [])


  const handleClick = (e) => {
    setField(props.fieldData._id)
  }

  return (
    <div className="card col-sm-3">
      <img className="card-img-top" src={`data:jpeg/png;charset=utf-8;base64,${FieldImage}`} alt="Card  cap" />
      <div className="card-body">
        <p className="card-text-h">{props.fieldData.name}</p>
        <Link to={{
          pathname: '/field/course'
        }}>
          <a className="btn btn-primary" onClick={e => { handleClick(e) }}>View Courses</a>
        </Link>

      </div>
    </div >

  )
}
