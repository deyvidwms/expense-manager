import React, { useState } from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

import logo from '../../assets/images/logo.svg';
import style from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <>

      <div className={style.content}>

        <div className={style.card}>

          <div className={style.logo}>
            <img src={logo} alt="Logo do sistema" />
          </div>

          <InputField 
            label="Login"
            type="text"
            placeholder="Digite seu login aqui..."
            valor={login}
            setValor={setLogin}
          />

          <InputField
            label="Senha"
            type="password"
            placeholder="Digite sua senha aqui..."
            valor={senha}
            setValor={setSenha}
          />

          <div>
            <Link to="dashboard">
              <Button handleClick={()=>void(0)}>Entrar</Button>
            </Link>
          </div>

          {/* <div>
            <a href="./">Esqueci a senha</a>
          </div> */}

        </div>

      </div>

    </>
  );
}

export default Login;