import React from 'react';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from '../../assets/INCLUSION_PRETO.png';

export const FormularioDoador = () => {

  return (
    <main>
      <div className="cadastro-doador m-4 d-flex justify-content-center">
        <div className="row col-md-4 col-lg-6 col-xl-7 align-items-stretch">
          <div className="cadastro-doador-infos">
            {/* <img src={logo} alt="Imagem da logo inclusion"/> */}
            <h1> Bem-vindo ao Inclusion!</h1>
            <h2> Preencha o formulário abaixo para ajudar quem realmente precisa!</h2>
          </div>
          <div className="col dados-pessoais ">
            <form className='formulario'>

              <label className="control-label">Nome</label>
              <input id="nome" placeholder="Digite o seu nome..." className="form-control" />



              <label className="control-label">Idade</label>
              <input id="idade" placeholder="Digite a sua idade..." min="18" max="150" type="number" className="form-control" />

              <label className="control-label">Email</label>
              <input id="email" type="email" placeholder="Digite o seu email" className="form-control" />



              <label className="control-label">Telefone</label>
              <input id="telefone" placeholder="Digite o seu telefone" maxLength="11" className="form-control" />



              <label className="control-label">Endereço</label>
              <input id="endereço" placeholder="Digite o seu endereço" className="form-control" />

              <label className="control-label">Senha</label>
              <input id="senha" type="password" placeholder="Digite a sua senha" className="form-control" />

              <button className="botao" onClick={() => alert('Cadastro realizado com sucesso!')} type="submit"> Enviar</button>

            </form>
          </div>
        </div>
      </div>
    </main>


  )
}