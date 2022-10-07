import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Card from "../common/Card";
import './Landing.css';


const Landing = () => {

    const [login, setLogin] = useState(false);
        return (
            <div className='landing_page'>
            {
                (!login)&&    
                <Card>
                    <section className='login_form'>
                        <form className='form_input' >
                            <input className='frm_input_text' type="text" placeholder="Name" required/>
                            <input className='frm_input_text' type="email" placeholder="Email"/>
                            <button type='submit' className='frm_submit_btn' onClick={() => {setLogin(true)}}>Start Test</button>
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

Landing.propTypes = {
   
};

export default Landing;