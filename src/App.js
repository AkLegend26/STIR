import React , {useState} from 'react';
import './App.css';
import { Navbar, Message } from './components';

const App = () => {
    const [prevClicked, setPrevClicked] = useState(false); //Change states for prev button
    const [nextClicked, setNextClicked] = useState(false); //Change states for next button

    const handlePrevClick = () => {
        setPrevClicked(!prevClicked); //intialized with not clicked
    };

    const handleNextClick = () => {
        setNextClicked(!nextClicked);
    };
    return (
        <div className='app_main'>
        <div className='chat_navbar'> {/* This function implements the navbar */}
            <Navbar />
        </div>
        <div className='navbar-border'>
        {/*maybe some url links if needed in this bar*/}
        </div>
        <div className='chat_main'> {/* This function implements the Message box */}
            <Message />
        </div>

        <div className="buttons-container"> {/* This div contains the buttons prev and next */}
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