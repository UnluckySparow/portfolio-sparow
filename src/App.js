
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function App() {
  const buttonClickHandler = () => {
    document.querySelector('.section_header').classList.add('showheader')
    document.querySelector('.burger-menu').classList.add('headbut');
  };

  return (
    <div className="burger-menu">
              <button onClick={buttonClickHandler}><FontAwesomeIcon icon={faBars}/></button>
    </div>
  );
}

export default App;
