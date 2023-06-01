import React , {useState} from 'react';
import './App.css';
import { Navbar, Message } from './components';

const App = () => {
    const [prevClicked, setPrevClicked] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);

    const handlePrevClick = () => {
        setPrevClicked(!prevClicked);
    };

    const handleNextClick = () => {
        setNextClicked(!nextClicked);
    };
    return (
        <div className='app_main'>
        <div className='chat_navbar'>
            <Navbar />
        </div>
        <div className='navbar-border'>
        {/*maybe some url links if needed in this bar*/}
        </div>
        <div className='chat_main'>
            <Message />
        </div>
        <div className="buttons-container">
        <button 
          className={`button ${prevClicked ? 'clicked' : ''}`} 
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button 
          className={`button ${nextClicked ? 'clicked' : ''}`} 
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
    )
}
       

export default App;