import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/body/Body';
import Signup from './Components/Signup form/Signup';
import Signin from './Components/Signin form/Signin';


function App() {
  return (
    <>
    <div className="container">
    <Navbar />
    <Body/>
    </div>
    <Signup/>
    <Signin/>
    </>
  );
}

export default App;
