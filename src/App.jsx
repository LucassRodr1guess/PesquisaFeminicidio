import './App.css'
import Header from './Header'
import Table from './Table';
import Footer from './Footer';
import GraficoBarras from './GraficoBarras';


function App() {
  return (
   <div>
    <Header/>
    <Table/>  
    <div>
      <section>
        {/* <GraficoBarras/> */}
      </section>
    </div>
    <Footer/>
   </div>
  )
}

export default App