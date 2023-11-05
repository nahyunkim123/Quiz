import React from 'react'
import {useNavigate} from 'react-router-dom'





function Main({userName,ChangeEvent, quizList, quiz, selected, quizCnt}) {
  
  
  let navigate = useNavigate();
 
  const type = quiz.map(item => item.type)

  const typeSelect = [...new Set(type)];



 
  const nameChk = () => {
    ( userName === "" 
      ? function(){
        alert("이름을 입력해주세요");
        document.querySelector("input").focus();
        
      }()
      : navigate("/quiz")  
    )
  }

 

  return (
    <>
      <div className='flex items-center w-full h-full'>
        <div className='mx-auto basis-11/12 lg:basis-10/12'>
      <h2 className='text-center text-[100px] font-extrabold text-[#333]'>LET'S QUIZ</h2>
 
          <div className='p-5 pb-0 bg-white rounded-lg '>
              <div className='flex flex-wrap justify-between text-center'>
                <input defaultValue={userName} onChange={ChangeEvent} className='py-2 pl-4 border rounded-md shadow-md outline-none name basis-full sm:basis-8/12' type="text" placeholder='이름을 입력해주세요' />
                <button className='mt-5 text-sm bg-blue-500 text-white sm:text-base btn-primary hover:bg-bg-blue-700 focus:ring-blue-400 sm:py-0 basis-full sm:basis-3/12 sm:mt-0 ' onClick={nameChk} >Start</button>
                <h3 className="my-5 text-center basis-full">{userName !== "" && <><span className='font-bold text-blue-800'>{userName}님</span> <span>문제 유형은 기본 설정되어 있으며, 총 {quiz.length}문제 중 14문제를 선택하셨습니다.</span></>}</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between w-full p-5 mt-5 bg-white rounded-lg">
            <div className="flex items-center justify-around xl:basis-4/12 basis-full">
              <button className='text-sm btn-primary basis-5/12'>랜덤설정</button>
              <select onChange={ChangeEvent} className='random py-1.5 text-center border rounded basis-6/12'>
                <option value="0">기본</option>
                <option value="1">랜덤</option>
              </select>
            </div>
            <div className="flex items-center justify-around xl:basis-4/12 basis-full">
              <button className='my-5 text-sm btn-primary basis-5/12'>개수설정</button>
              <select onChange={ChangeEvent} defaultValue={selected} className=' cnt py-1.5 text-center border rounded basis-6/12'>
                    {
                      Array(quizCnt).fill().map((e,i)=>{
                        return <option value={i+1} key={i}>{i+1}문제</option>
                      })
                    }
              </select>
            </div>
            <div className="flex items-center justify-around xl:basis-4/12 basis-full">
            <button className='text-sm btn-primary border basis-5/12'>문제유형</button>
            <select onChange={ChangeEvent} className=' type py-1.5 text-center border rounded basis-6/12'>
                <option className='' value="전체">전체 {quiz.length}(문제)</option>
                {
                  typeSelect.map(el =>{
                    return <option value = {el} key = {el}>{el} ({quiz.filter(e=> el === e.type).length}문제)</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Main