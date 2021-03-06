import React from 'react';
import './style.css';

const BookApptBtn = props => (
    <>
        <div className='btn-wrapper'>
            <button className='book-appt-btn btn-lg btn-primary rounded-pill' onClick={props.HandleDisplayZip}>Book an Appointment</button>
        </div>
    </>
)

export default BookApptBtn;