import React,{ useRef }  from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toast } from 'react-toastify';

export const Contacto = () => {
    let navigate = useNavigate()  
    const datosFormulario = React.useRef()
    const consultarFormulario = (e)=> {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const contacto = Object.fromEntries(datForm)
        console.log(contacto.nombre) 
        e.target.reset()
        toast.success(`consulta recibida generada por ${contacto.nombre}`)
        navigate('/')  
    }

    return (
        //ver margin style   let :>?
        <div className='container' style={{marginTop:"15px"}}>
            <div>
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido </label>
                    <input type="text" className="form-control" name='nombre'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input type="email" className="form-control" name='email'/>
                </div>
               
                <div className="mb-3">
                    <label htmlFor="textarea" className="form-label">Consulta</label>
                    <textarea className="form-control" name='textarea' rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
}


