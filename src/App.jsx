import Student from './Student.jsx'

function App(){
  return(
    <>
      <Student name= "hehe" age={12} isStudent={true} />
      <Student name="bob" age={13} isStudent={false}/ >
      <Student name="hehu" />
    </>
  );
} 

export default App
