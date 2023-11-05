import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuizList from './components/Quizlist';
import { type } from '@testing-library/user-event/dist/type';



function App() {
  

  const [userName, setUserName] = useState ("");
  const [quizList, setQuizList] = useState(QuizList);
  const quiz = [...QuizList]
  const [selected, setSelected] = useState(4)
  const [quizCnt, setQuizCnt] = useState(QuizList.length);
  const [typeText, setTypeText] = useState("전체")

  const ChangeEvent = (data) =>{
    const classValue = data.target.className;
    const dataValue = data.target.value;

      switch(true){

       case classValue.includes(
        "name") :
          setUserName(dataValue)
        break;

        case classValue.includes("random"): 
        (dataValue === "1" ? setQuizList([...QuizList].sort(()=>{
            return Math.random() - 0.5}).slice(0,selected)
            ) 
            : setQuizList([...QuizList]).slice(0,selected));
        break;

        case classValue.includes("cnt")
        : setSelected(dataValue)
        break;
  
        case classValue.includes("type"): 
        (dataValue === "전체"
        ?
          setQuizList([...QuizList].slice(0,selected))
          : 
          setQuizList([...QuizList].filter((e)=>{
            return e.type === dataValue
          }).slice(0,selected))
        )
        setTypeText(dataValue)
        break;

        default:
          console.log("데이터가 없습니다");
      }

  }



  useEffect(()=>{
    setQuizList([...QuizList].slice(0,selected));
    setQuizCnt([...QuizList].filter((e)=>{
      return typeText === "전체" ? true : e.type === typeText;
    }).length);
  },[typeText, selected])

  console.log(QuizList)
  return (
   <>
   
    <Routes>
        <Route path='/' element={<Main ChangeEvent = {ChangeEvent} userName =  {userName}  quizList = {quizList} quiz ={quiz} selected ={selected} quizCnt={quizCnt}/>}/>
          <Route path='/quiz' element={<Detail quizList ={quizList}
          userName =  {userName} quiz ={quiz}/>}/>
    </Routes>

   </>
  );
}

export default App;
