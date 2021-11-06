import React from 'react';
import MessageForm from '../components/MessageForm/MessageForm';
import MessageList from '../components/MessageList/MessageList';
import './App.css';

function App() {


  const [val, setVal] = React.useState([])
  const onMessageSend = valueInput => {

    if (valueInput !== "") {
      setVal(prevState => ([...prevState, { me: 'me', body: valueInput }]))

      fetch(`http://localhost:3001/message/${valueInput}`)
        .then(response => response.json())
        .then(data => {
          setVal(prevState => ([...prevState, { body: data.message }]))

        });
    }
  }
  return (
    <div className="App">
      <MessageList messages={val} />
      <MessageForm onMessageSend={onMessageSend} />
    </div>
  );
}

export default App;
