import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  const saludo="Brindamos productos para las soluciones del futuro";
  return (
   
        <>
        
        <div>
                  
          <NavBar />
          <ItemListContainer mensaje={saludo}/>
          
          
            
        </div>
          
        </>
        
    
  );
}

export default App;
