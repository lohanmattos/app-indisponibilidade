import App from '../../../components/Grafico/App'
import Navbar from '../../../components/Navbar'
import Divider from '../../../components/Divider'

import './styles.css'

function Dashboard() {
    return (
        <>
            <Navbar />
            <Divider title="Modulo Afastamento"/>
            <div className='container'>
                <App />
            </div>
        </>
    )
}

export default Dashboard;