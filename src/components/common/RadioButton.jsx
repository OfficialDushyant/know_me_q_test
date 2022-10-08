import React from 'react';
import './RadioButton.css';
function RadioButton({label}) {
    return (
        <div className='radio_btn_wrapper'>
            <input type="radio" name="radio"/>
			<span className='frm_radio_label'>{label}</span>
        </div>
    );
}

export default RadioButton;