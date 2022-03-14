import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

    const [confirmSubmit, setConfirmSubmit] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8040ykh', 'template_qiy1qfz', form.current, 'aEwWQf9sNli1z8mmf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setConfirmSubmit(!confirmSubmit);
        setTimeout(() => {
            setConfirmSubmit(false);
          }, 3000);
        e.target.reset();
    };

    return (
        <div name='contact' className='w-full h-screen'>
            <div className='section'>
                <h1 className='section-header'>Contact</h1>
                <div className='w-full flex flex-col items-center'>
                    <form className='flex flex-col py-4 w-full md:w-[75%]'ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="name" required/>
                        <label>Email</label>
                        <input type="email" name="email" required/>
                        <label>Subject</label>
                        <input type="text" name="subject" required/>
                        <label>Message</label>
                        <textarea name="message" required/>
                        <input type="submit" value="Send" className='text-white border-2 px-4 py-4 my-2 flex items-center cursor-pointer'/>
                    </form>
                    <p className={!confirmSubmit ? 'hidden' : 'flex'}>Message sent</p>
                </div>
            </div>
        </div>
    )
}

export default Contact