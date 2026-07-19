import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Contact(){

    const [form,setForm]=useState({

        name:"",
        email:"",
        phone:"",
        category:"",
        mode:"",
        message:""

    });

    const [success,setSuccess]=useState(false);

    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=(e)=>{

        e.preventDefault();

        if(

            form.name==="" ||

            form.email===""

        ){

            alert("Please fill required fields");

            return;

        }

        setSuccess(true);

    };

    return(

        <>

        <Navbar/>

        <section className="contact-page">

            <h1>

                Contact Us

            </h1>

            <form onSubmit={handleSubmit}>

                <input

                    name="name"

                    placeholder="Full Name"

                    value={form.name}

                    onChange={handleChange}

                />

                <input

                    name="email"

                    placeholder="Email"

                    value={form.email}

                    onChange={handleChange}

                />

                <input

                    name="phone"

                    placeholder="Phone"

                    value={form.phone}

                    onChange={handleChange}

                />

                <select

                    name="category"

                    value={form.category}

                    onChange={handleChange}

                >

                    <option>

                        Select Course

                    </option>

                    <option>

                        Web Development

                    </option>

                    <option>

                        Data Science

                    </option>

                </select>

                <textarea

                    name="message"

                    placeholder="Message"

                    value={form.message}

                    onChange={handleChange}

                />

                <button>

                    Submit

                </button>

            </form>

            {

                success &&

                <h3>

                    Form Submitted Successfully!

                </h3>

            }

        </section>

        <Footer/>

        </>

    )

}

export default Contact;