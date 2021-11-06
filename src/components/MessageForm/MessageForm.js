import React , {useRef , useEffect} from 'react';
import './MessageForm.css';

function MessageForm({ onMessageSend }) {
  const [valueInput , setValueInput] = React.useState("") 
  const ref = useRef()
  function handleFormSubmit(event) {
    onMessageSend(valueInput)


    event.preventDefault();
 
  }
  useEffect(() => {
    ref.current.focus()
  }, [])
  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          value ={valueInput}
          ref={ref}
          onChange={e => setValueInput(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
