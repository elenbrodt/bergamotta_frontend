import "../CadastroOwner/style.css"
import Header from "../../components/Header"


export default function CadastroOwner () {
    return(
        <>
    <Header/>
  <form className='cadastro-owner'>
  <div>
  <p>Nome</p>
  <input type="text" placeholder="      digite seu nome e sobrenome" className='configurando-input'/>
  <p>Email</p>
  <input type="email" placeholder="     example@gmail.com" className='configurando-input'/>
  <p>Senha</p>
  <input type="passwordt" placeholder="    digite sua senha" className='configurando-input'/>

  <p>Foto</p>
  <input type="urlr" placeholder="    Link da imagem" className='configurando-input'/>
  </div>
  <div className='inputs-especificos'>
  <div>
  <p>CNPJ</p>
  <input type="number" placeholder="    digite seu CNPJ" className='config-input-secondary cnpj' />
  </div>
  <div>
  <p>Ocupação</p>
  <input type="text" placeholder="    digite sua ocupação" className='config-input-secondary'/>
  </div>
  </div>
  <div className='inputs-especificos-secondary'>
  <div>
  <p>Cidade</p>
  <input type="text" placeholder="    digite sua cidade" className='config-input-tertiary cidade'/>
  </div>
  <div>
  <p>UF</p>
  <input type="text"  placeholder="    digite a UF" className='config-input-tertiary'/>
  </div>
  <div>  
  <p>País</p>
  <input type="text" placeholder="    digite o País" className='config-input-tertiary'/>
  </div>
  </div>
  <button className="btn_cadastro_owner">Salvar alterações</button>
  </form>
  </>
    )
}
