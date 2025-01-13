import React from 'react'
import style from './ContactForm.module.css';
import Button from '../Button/Button';
import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import { useState } from 'react';



export default function ContactForm() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [text,setText] = useState("please write someting here")

  
   const onSubmit=(event)=>{
        event.preventDefault();

        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)
    

       
       


        console.log("name",event.target[0].value)
        console.log("email",event.target[1].value)
        console.log("text",event.target[2].value)


   }

  return (
    <div>
        <section className={style.container}>
            <div className={style.contact_form}>
                <div className={style.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                <Button 
                
                text="VIA CALL" 
                icon={<FaPhoneAlt fontSize="24px" />} />
                </div>

                <Button 
                isOutline={true}
                text="VIA EMAIL FORM" 
                icon={<HiMail fontSize="24px" />} />


                <form onSubmit={onSubmit}>
                    <div className={style.form_controler}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />

                    </div>
                    <div className={style.form_controler}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name='email' />

                    </div>
                    <div className={style.form_controler}>
                        <label htmlFor="text">Text</label>
                        <textarea name='text' rows="8" />

                    </div>
                    <div 
                       style={
                        {
                            display:"flex",
                            justifyContent:"end",
                        }
                       }
                    >
                        <Button text="SUBMIT BUTTON" />

                    </div>
                    <div>
                        {name + " " + email +" " + text}
                    </div>

                </form>



               

            </div>
            <div className={style.contact_image}>

                <img src="public\Service 24_7-pana 1 (1).svg" alt="image" />

            </div>
        </section>
      
    </div>
  )
}
