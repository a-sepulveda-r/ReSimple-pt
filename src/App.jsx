import { NavbarMenu } from './components/Navbar';
import { WorkersByArea } from './components/WorkersByArea';
import { FooterComponent } from './components/FooterComponent';
import './App.css';
import { Presentation } from './components/Presentation';

function App() {
  return (
    <div className='app-container'>
      <NavbarMenu />
      <Presentation />
      <WorkersByArea />
      <FooterComponent />
    </div>
  );
}

export default App;
