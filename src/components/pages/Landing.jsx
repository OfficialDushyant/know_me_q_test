import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

import Card from "../common/Card";
import RadioButton from "../common/RadioButton";

import { useTest } from '../../context/TestContext';

import './Landing.css';


const Landing = () => {

    const { login, setLogIn, setTest } = useTest();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Please enter your email address")
                .email("Please enter valid email address"),
            name: Yup.string()
                .required("Please enter your name"),

        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch(BASE_URL + "/Tests.json")
                if(!response.ok) {
                    throw new Error("API Failed");
                }
                const tests = await response.json();
                setTest(tests);
                setLogIn(true);
            } catch(error) {
                console.log(error);
            }
        }
    })
        return (
            <div className='landing_page'>
            {
                (!login)&&    
                <Card>
                    <section className='login_form'>
                        <form onSubmit={formik.handleSubmit} className='form_input'>
                                <input className="frm_input_text" type="text" placeholder="Name" name="name" onChange={formik.handleChange}/>
                                { formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span> }
                                <input className='frm_input_text' type="email" placeholder="Email" name="email" onChange={formik.handleChange} />
                                { formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span> }
                            <RadioButton label={"Select"}/>
                            <button type='submit' className='frm_submit_btn'>Start Test</button>
                        </form>
                    </section>
                </Card>

            }
            {
                (login)&&
                <Card>
                    <section className='login_form'>
                        <div>Test 1</div>
                        <div>Test 2</div>
                    </section>
                </Card>
            }
            </div>
        );
};

export default Landing;