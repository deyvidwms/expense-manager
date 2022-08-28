import React from 'react';

import style from './Login.module.scss';

const Login = () => {
  return (
    <>
      <div className='card'>

        <div>
          <img src="" alt="" />
        </div>

        <div>
          <label htmlFor="">Login</label>
          <input type="text" placeholder='Digite seu login' />
        </div>

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