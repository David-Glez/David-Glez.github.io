import React, {useState, useRef} from 'react';
import loader from '../assets/images/loader.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import keys from '../mail/emailSender'

init(keys.USER_ID)

const ContactMe = (props) => {

    const [emailData, setEmailData] = useState({
        email: '',
        name: '',
        subject: '',
        message: '',
        loading: false
    })

    const validate = () => {
        if(emailData.email.length != 0 && emailData.name.length != 0 && emailData.subject.length != 0 && emailData.message.length != 0){
            return true
        }else{
            return false
        }
    }

    const onChangeData = (e) => {
        
        const field = e.target.name
        let value = e.target.value
        setEmailData(emailData => ({...emailData, [field]: value}))
    }

    //  send data to email 
    const sendData = (e) => {
        e.preventDefault()
        setEmailData(emailData => ({...emailData, ['loading']: true}))

        const isValid = validate()

        if(isValid){

            emailjs.sendForm(keys.SERVICE, keys.IDTEMPLATE_ID, e.target, keys.USER_ID)
                    .then((response) => {
                        if(response.status == 200){
                            toast('El mensaje se ha enviado. Gracias!',{
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 4000,
                                hideProgressBar: false,
                                newestOnTop: false,
                                closeOnClick: true,
                                rtl: false,
                                draggable: true,
                                pauseOnHover: true,
                                progress: undefined
                            });

                            setEmailData({
                                email: '',
                                name: '',
                                subject: '',
                                message: '',
                                loading: false
                            })
                        }else{
                            toast.warning('Error al enviar',{
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 4000,
                                hideProgressBar: false,
                                newestOnTop: false,
                                closeOnClick: true,
                                rtl: false,
                                draggable: true,
                                pauseOnHover: true,
                                progress: undefined
                            });
                        }
                        
                    }, (error) => {
                        toast.warning('Error al enviar',{
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 4000,
                            hideProgressBar: false,
                            newestOnTop: false,
                            closeOnClick: true,
                            rtl: false,
                            draggable: true,
                            pauseOnHover: true,
                            progress: undefined
                        });
                    })

           
        }else{
            
            toast.warning('Faltan campos por llenar',{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 4000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                draggable: true,
                pauseOnHover: true,
                progress: undefined
            });
        }
        setEmailData(emailData => ({...emailData, ['loading']: false}))

    }

    return(
        <>

        <section id = 'contact'>
            <ToastContainer />
            <div className = 'row section-head'>
                <div className = 'two columns header-col'>
                    <h1 id = 'icon-mail'><span>Get In Touch</span></h1>
                </div>
                <div className="ten columns">

                    <h1>Envíame un email</h1>

                </div>
            </div>
            
            <div className = 'row'>
                <div className = 'eight columns'>
                    <form onSubmit = {sendData}>
                        <fieldset>
                            <div>
                                <label htmlFor = 'name'>Nombre <span className = 'required'>*</span></label>
                                <input type = 'text' value = {emailData.name} onChange = {onChangeData} size = '50' id = 'name' name = 'name' disabled = {emailData.loading}/>
                            </div>

                            <div>
                            <label htmlFor="email">Email <span className="required">*</span></label>
                            <input type="email" value = {emailData.email} onChange = {onChangeData} size="35" id="email" name="email" disabled = {emailData.loading}/>
                            </div>

                            <div>
                                <label htmlFor="subject">Asunto</label>
                                <input type="text" value = {emailData.subject} onChange = {onChangeData} size="35" id="subject" name="subject" disabled = {emailData.loading}/>
                            </div>

                            <div>
                                <label htmlFor="message">Mensaje <span className="required">*</span></label>
                                <textarea cols="50" rows="5" id="message" value = {emailData.message} onChange = {onChangeData} name="message" disabled = {emailData.loading}></textarea>
                            </div>

                            <div>
                                <button className="submit" id = 'sendMail' value='Send' type = 'submit'>Enviar</button>
                                <span id="image-loader">
                                    <img alt="" src = {loader} />
                                </span>
                            </div>
                        </fieldset>
                    </form>
                    <div id="message-warning"> Ha ocurrido un error. Verifique sus datos</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>El mensaje a sido enviado. Gracias!<br/>
                    </div>
                </div>

                <aside className = 'four columns '>
                    <div className="widget widget_contact">

                        <h4>Contacto</h4>
                        <p className="address">
                            <span>David de Jesús González González</span><br/>
                            <span>San Luis Potosí, S.L.P.</span><br/>
                            <span>(444)262-6138</span><br/>
                            <span>david.gonzalez_isc@outlook.com</span><br />
                            <span>david.gonzalez_24@outlook.com</span>
                        </p>

                    </div>

                </aside>
            </div>
        </section>
        </>
    )
}

export default ContactMe