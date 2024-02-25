import React from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Iniciar sesión</h3>
        <p className='text-center'>Inicie sesión en su cuenta para continuar</p>
        <form action=''>
          <CustomInput type="email" label="Correo elctrónico" id="email" />
          <CustomInput type="password" label="Contraseña" id="pass" />
          <div className='mb-3 text-end'>
            <Link to="forgot-password">Olvidaste tu contraseña?</Link>
          </div>
          <Link
            to='/admin'
            className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
            type='submit'
            style={{ background: "#ffd333" }}
          >
            Entrar
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login