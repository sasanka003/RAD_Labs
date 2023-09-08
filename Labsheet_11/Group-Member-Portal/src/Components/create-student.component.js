import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import StudentForm from "./StudentForm";

const CreateStudent = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] =
    useState({ name: '', email: '', rollno: '' })

  const onSubmit = studentObject => {
    axios.post(
  'http://localhost:4000/students/create-student',
    studentObject)
    .then(res => {
      if (res.status === 200){
      alert('Student successfully created');
      navigate("/student-list")
      }
      else
      Promise.reject()
    })
    .catch(err => alert('Something went wrong'))
  }
    
  return(
    <StudentForm initialValues={formValues}
    onSubmit={onSubmit}
    enableReinitialize>
    Create Student
    </StudentForm>
  )
}

export default CreateStudent
