import React from "react"
function Student(props){

    return(
        <div>
            <p>Student Name: <b> {props.name} </b>, ID:<b> {props.id}</b>, CGPA:<b> {props.cgpa}</b> </p>
        </div>

    )
}

export default Student;