import React from 'react';

import InputText from '../../components/InputText';

import style from './Login.module.scss';

const Login = () => {
  return (
    <>
      <div className='card'>

        <div>
          <img src="" alt="" />
        </div>

        <InputText 
          label="Login"
          placeholder="Digite seu login"
        />

        <div>
          <label htmlFor="">Senha</label>
          <input type="text" placeholder='Digite sua senha' />
        </div>

        <div>
          <button>Entrar</button>
        </div>

        <div>
          <a href="./">Esqueci a senha</a>
        </div>

      </div>
    </>
  );
}

export default Login;