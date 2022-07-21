import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Divider from '../../components/Divider'

import './styless.css'
import FormCadastro from '../../components/FormCadastro'

function Cadastro() {

  return (
    <div> 
      <Navbar/>
      <Divider/>
      <FormCadastro/>
      <Footer/>
    </div>
  )
}

export default Cadastro
