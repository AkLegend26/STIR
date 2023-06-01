import React, { useState } from 'react';
import './message.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Message = () => {
  const [value, setValue] = useState('one'); //T1 and the other tabs
  const [activeName, setActiveName] = useState('P1'); //P1 and the other users

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNameClick = (name) => {
    setActiveName(name);
  };

  return (
    <div className='message_box_container'>
      <div className="container">
        <Box sx={{ width: '100%' }}> {/*Generates the T1,T2,T3 tabs */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="T1" />
            <Tab value="two" label="T2" />
            <Tab value="three" label="T3" />
          </Tabs>
        </Box>
        {value === 'one' && (
          <div className="chatbox-container">
            <div className="names-container">
              {/*Defines the left hand side of message box */}
              <div className='contacts'>
                <header>Conversations</header>
                <div className={`name ${activeName === 'P1' ? 'active' : ''}`} 
                     onClick={() => handleNameClick('P1')}>
                  <div>
                    <div className="profile-photo_1"></div> {/**colored circle to show users*/}
                    p1
                  </div>
                  <div className='relation'>Relationship</div>
                </div>
                <div className={`name ${activeName === 'P2' ? 'active' : ''}`} 
                     onClick={() => handleNameClick('P2')}>
                  <div> {/*Adds P1 and P2 with on click properties */}
                    <div className="profile-photo_2"></div>
                    p2
                  </div>
                  <div className='relation'>Relationship</div>
                </div>
              </div>
            </div>

            <div className='current-user-message-box'>
            <div className='current-user'>
                    {activeName}
                </div>
            {/*Conversation container has all the messages on the right side */}
            <div className="conversation-container">
              {activeName === 'P1' && (
                <>
                    {/*All the messages contents are below */}
                    <div className="receiver-name">P2</div>
                    <div className="message-receiver">
                        <div>Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s,</div>
                        </div>
                  
                    <div className="sender-name">P1</div>
                    <div className="message-sender">
                        <div>Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s,</div>
                        </div>
                        <div className="receiver-name">P2</div>
                    <div className="message-receiver">
                        <div>Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s,</div>
                        </div>
                  
                    <div className="sender-name">P1</div>
                    <div className="message-sender">
                        <div>Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s,</div>
                        </div>
                    <div className="receiver-name">P2</div>
                    <div className="message-receiver">
                        <div>Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s,</div>
                        </div>
                
                    <div className="sender-name">P1</div>
                    <div className="message-sender">
                        <div>Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s,</div>
                        </div>
                </>
              )}
              {activeName === 'P2' && (
                <>
                    <div className="receiver-name">P1</div>
                    <div className="message-receiver">
                        <div>Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s,</div>
                        </div>

                    <div className="sender-name">P2</div>
                    <div className="message-sender">
                        <div>Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s,</div>
                    </div>
                </>
              )}
            </div>
            </div>
          </div>
        )}
        {/*Different tabs implmentation, T2 and T3 */}
        {value === 'two' && (
          <div>NOTHING TO SEE HERE</div>)}
        {value === 'three' && (
        <div>HIDDEN COMPARTMENT </div>)}
      </div>
    </div>
  );
};

export default Message;