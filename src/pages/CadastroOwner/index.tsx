import "../CadastroOwner/style.css"
import Header from "../../components/Header"


export default function CadastroOwner () {
    return(
        <>
    <Header/>
  <div className='cadastro-owner'>
  <p>Nome</p>
  <input type="text" placeholder="      digite seu nome e sobrenome" className='configurando-input'/>
  <p>Email</p>
  <input type="email" placeholder="     example@gmail.com" className='configurando-input'/>
  <p>Senha</p>
  <input type="passwordt" placeholder="    digite sua senha" className='configurando-input'/>
  <p>Foto</p>
  <input type="urlr" placeholder="    Link da imagem" className='configurando-input'/>
  <div className='inputs-especificos'>
  <div>
  <p>CNPJ</p>
  <input type="number" placeholder="    digite seu CNPJ" className='config-input-secondary'/>
  </div>
  <div>
  <p>Ocupação</p>
  <input type="text" placeholder="    digite sua ocupação" className='config-input-secondary'/>
  </div>
  </div>
  <div className='inputs-especificos-secondary'>
  <div>
  <p>Cidade</p>
  <input type="text" placeholder="    digite sua cidade" className='config-input-tertiary'/>
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
  <button>Salvar alterações</button>
  </div>
  </>
    )
}
