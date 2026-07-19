import { useState } from "react";

function EnrollForm({course,onClose}){

const [form,setForm]=useState({

name:"",
email:"",
phone:""

});

function handleSubmit(e){

e.preventDefault();

alert("Enrollment Successful!");

onClose();

}

return(

<div className="overlay">

<div className="popup">

<h2>

Enroll in {course.title}

</h2>

<form onSubmit={handleSubmit}>

<input placeholder="Name"/>

<input placeholder="Email"/>

<input placeholder="Phone"/>

<button>

Submit

</button>

</form>

<button onClick={onClose}>

Close

</button>

</div>

</div>

)

}

export default EnrollForm;