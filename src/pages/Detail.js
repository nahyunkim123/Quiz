import { useState } from "react";





function Detail({userName, quizList, quiz}) {
  const [current, setCurrent] = useState(0);
  const [userAnswer, setAnswer] =useState([])


  
  const setUserAnswer = (data) => {
    setAnswer([...userAnswer, data])
  }
  
  
  const _score = quizList.filter((e,i)=>{

    return e.answer === userAnswer[i]
  }).length;

  const currentPer = Math.floor(((current +1)/ quizList.length)*100)


  

  
  return (
    <>
      <div className='flex items-center w-full h-full'>
        <div className="flex flex-wrap items-center h-full mx-auto basis-11/12 lg:10/12">
          <div className="text-center basis-full"> 
      
            {
              current < quizList.length
          
              
              ?<><h4 className="p-5 mb-5 text-xl font-bold text-blue-600 bg-white border rounded-lg sm:text-2xl lg:text-3xl">{userName}님 반갑습니다</h4>
              <div className="relative w-full h-5 mb-5 border rounded-full bg-gray-50">
                <div className="absolute top-0 z-50 text-sm font-bold text-blue-600 right-3">{currentPer}%</div>                
                <div className="absolute top-0 left-0 h-full transition-all duration-1000 bg-blue-200 rounded-full" style={{width:`${currentPer}%`}}></div>
              </div>
              
              <div className="flex flex-wrap justify-between p-5 bg-white border rounded-lg">
                <p>{quizList[current].question}</p>
                <span>{current +1} / {quizList.length}문제</span>
              </div>

              <div className="flex flex-wrap justify-between mt-5 bg-white border rounded-lg">
                <ul className="text-center basis-full">
                    
                      <li className="border-b flex justify-between py-2.5 cursor-pointer hover:bg-gray-50" onClick={()=>{setCurrent(current+1); setUserAnswer(quizList[current].view.number1)} }>
                        <span className="border-r basis-1/12">1번</span>
                        <span className="basis-11/12">{quizList[current].view.number1}</span>
                      </li>
                      <li className="border-b flex justify-between py-2.5 cursor-pointer hover:bg-gray-50" onClick={()=>{setCurrent(current+1); setUserAnswer(quizList[current].view.number2)} }>
                        <span className="border-r basis-1/12">2번</span>
                        <span className="basis-11/12">{quizList[current].view.number2}</span>
                      </li>
                      <li  className="border-b flex just
                      
                      
                      ify-between py-2.5 cursor-pointer hover:bg-gray-50"onClick={()=>{setCurrent(current+1); setUserAnswer(quizList[current].view.number3)} }>
                        <span className="border-r basis-1/12">3번</span>
                        <span className="basis-11/12">{quizList[current].view.number3}</span>
                      </li>
                      <li className=" py-2.5 flex justify-between cursor-pointer hover:bg-gray-50" onClick={()=>{setCurrent(current+1); setUserAnswer(quizList[current].view.number4)} }>
                        <span className="border-r basis-1/12">4번</span>
                        <span className="basis-11/12">{quizList[current].view.number4}</span>
                      </li>
                   
                  
                </ul>  
              </div>
              </>
              :
              <>
                <div>
                  <p className="text-lg">총 <span className="text-xl font-bold text-blue-500">{quizList.length}</span> 문제 중 <span className="text-xl font-bold text-indigo-500">{_score}</span>문제를 맞추셨으며,  점수는 <span className="text-xl font-bold text-indigo-500">{Math.floor((_score / quizList.length)*100)}</span>점 입니다.  </p>
                  <p className="flex items-center mt-4">
                    정답: <span className="block w-5 h-5 ml-2 mr-5 bg-blue-500"></span>
                    선택한 오답 : <span className="block w-5 h-5 ml-2 mr-5 bg-red-500"></span>
                    오답 선택 시 정답 : <span className="block w-5 h-5 ml-2 mr-5 bg-green-600"></span>
                  </p>
                </div>
            
                    {
                    quizList.map((e,i) =>{
                      return (
                          <ul key={i} className="mt-5 bg-white rounded-2xl">
                            <li className="flex flex-wrap justify-between">
                              <p className="py-4 text-base font-bold border bg-gray-50 basis-full rounded-4">{e.question}</p>
                              {
                                Object.entries(e.view).map((el,index)=>{
                                  return(
                                   <p className={`font-bold mt-5 basis-[49.5%] border text-base py-4 rounded-lg ${e.answer ===el[1] && userAnswer[i]===e.answer ? "bg-blue-500" : e.answer === el[1] ? 'bg-green-600' : el[1] === userAnswer[i]? 'bg-red-500 ': 'bg-white'}`}>{el[1]}</p> 
                                  )
                                  
                                })
                              }
                            </li>
                          </ul>
                      )
                    })
                    } 
                </>
              }

          </div>
        </div>
      </div>
    </>
  )
}

export default Detail