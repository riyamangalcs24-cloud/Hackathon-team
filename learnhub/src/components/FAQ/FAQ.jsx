import { useState } from "react";
import "./FAQ.css";

function FAQ({ item }) {

    const [show, setShow] = useState(false);

    return (

        <div className="faq">

            <div
                className="faq-question"
                onClick={() => setShow(!show)}
            >

                <h3>{item.question}</h3>

                <span>
                    {show ? "-" : "+"}
                </span>

            </div>

            {show &&

                <p className="faq-answer">

                    {item.answer}

                </p>

            }

        </div>

    )

}

export default FAQ;