import FormEdit from "../../../components/FormEdit"
import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"
import Divider  from "../../../components/Divider"

function EditAfastamento(){
    return(
        <div>
        <Navbar/>
        <Divider title="Modulo Afastamento"/>
        <FormEdit />
        <Footer />
        </div>
    )
}

export default EditAfastamento