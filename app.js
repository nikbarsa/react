import React from 'react';
import './App. css';

function App() {
    const [messageList, setMessageList] = useState([])
    const [messageBody, setMessageBody = useState({
        text: '',
        autor: '',
    })

    const ROBOT_MESSAGE = 'Здраствуй,я прочитал твое сообщение'

    useEffect(() => {
        if (messageList.length > 0 && messageList.slice(-1)[0] autor !== 'robot'){
        setTimeout(() => {
            setMessageList(pervstate => [...pervstate, { text: ROBOT_MESSAGE, autor: 'robot' }])
        }, 1500)
    }
}, [messageList]

return (
    <div className="App">
        {<Form Data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>}
        <div className="messageList">
            {
                messageList.map((e, i) => <Message text={e.tezt} author={e.author} key={i />}))
        }
        </div>}
    </div>
);  
}
export default App;

const {text, autor} = Data

const SubmitForm = (e) =>{
    e.preventDefault()
    if(text.length > 0){
        setMessage(pervstate => [...pervstate{text,author}])
    }
    setData(
        {
            text: '',
            autor: '',
        }
    )
}


return(
    <form onSubmit={SubmitForm}>
        <input placeholder='Имя' value={text} onChange = {(e)=> 
setData(pervstate => ({...pervstate,text: e.target.value}))
    )}/>

    <input placeholder='Текст' value={author} onChange = {(e)=>
    setData(pervstate => ({...pervstate,author: e.taret.value})
    )}/>
    <button type='submit'>Отправить</button>
    </form>

