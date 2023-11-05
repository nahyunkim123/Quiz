const QuizList = [
    {

        id:1,
        question : "HTML의 의미를 보기에서 고르세요!",
        answer : "Hyper Text Markup Language",
        view :{
            number1: "Hyper Text Markup Language",
            number2: "Hyperlinks and Text markup Language",
            number3: "Home Tool Markup Language",
            number4: "Hyperlinks Tool Markup Language"

        },
        hint :"하이퍼텍스트 마크업 언어입니다.",
        type :"html"


    },
    {   id:2,
        question : "웹표준을 만든 회사는?",
        answer : "The World Wide Web Consortium",
        view :{
            number1: "Microsoft",
            number2: "Google",
            number3: "Mozilla",
            number4: "The World Wide Web Consortium"

        },
        hint :"W3C가 만들었습니다",
        type :"html"

        
    },
    {
        id:3,
        question : "태그를 닫을 때 쓰는 문자는?",
        answer : "/",
        view :{
            number1: ".",
            number2: "/",
            number3: "//",
            number4: "!"

        },
        hint :"html을 열어서 닫는 태그를 보십시오",
        type :"html"


    },
    {
        id:4,
        question : "JavaScript를 적용하기 위한 HTML 요소는?",
        answer : "<script>",
        view :{
            number1: "<script>",
            number2: "<scripting>",
            number3: "<js>",
            number4: "<javascript>"

        },
        hint :"스스로 생각해보세요!",
        type :"js"


    },
    {
        id:5,
        question : "아래요소의 내용을 변경하는 JavaScript 구문은?",
        example: "<p id = 'demo'><p/>",
        answer : "document.getElementById('demo').innerHTML = 'HelloWorld'",
        view :{
            number1: "document.getElement('p').innerHTML = 'HelloWorld'",
            number2: "#demo.innerHTML = 'Hello World!'",
            number3: "document.getElementById('demo').innerHTML = 'HelloWorld'",
            number4: "document.getElementByName('p').innerHTML = 'HelloWorld'"

        },
        hint :"id 선택자입니다 ",
        type :"js"




    },
    {
        id:6,
        question : "JavaScript에서 함수를 생성하는 방법은? ",
        answer : "function myFunction()",
        view :{
            number1: "function:myFunction()",
            number2: "function myFunction()",
            number3: "function = myFunction()",
            number4: "function() myFunction"

        },
        hint :"혼자 풀어보세요",
        type :"js"


    },
    {
        id:7,
        question : "css의 목적은?",
        answer : "웹페이지 스타일링",
        view :{
            number1: "웹페이지 설계",
            number2: "객체 지향 프로그래밍 ",
            number3: "웹페이지 코딩",
            number4: "웹페이지 스타일링"

        },
        hint :"css의 정의는  Cascading Style Sheet 입니다",
        type :"css"




    },
    
    {
        id:8,
        question : "css의 의미는?",
        answer : "Cascading Style Sheets",
        view :{
            number1: "Cascading Style Startups",
            number2: "Cascading Style Sheets",
            number3: "Colorful Style Sheets",
            number4: "Cascading Stun Sheets"

        },
        hint :"없습니다",
        type :"css"




    },
    {
        id:9,
        question : "#ffffff는 무슨 색상인가",
        answer : "white",
        view :{
            number1: "black",
            number2: "red",
            number3: "white",
            number4: "blue"

        },
        hint :"하얀색은 white이다",
        type :"css"




    },
    {
        id:10,
        question : "HTML의 목적은?",
        answer : "웹페이지 구축",
        view :{
            number1: "웹페이지 설계",
            number2: "객체 지향 프로그래밍 ",
            number3: "웹페이지 코딩",
            number4: "웹페이지 스타일링"

        },
        hint :"id ",
        type :"html"




    },
{
        id:11,
        question : "css에서 모서리를 둥글게 만드려면 무엇을 사용해야 하는가?",
        answer : "border-radius:30px",
        view :{
            number1: "corner-effect:round",
            number2: "border[rounded]:30px ",
            number3: "alpha-effect:round-corner",
            number4: "border-radius:30px"

        },
        hint :"id ",
        type :"css"




    }
    ,
{
        id:12,
        question : "고의적으로 불만 섞인 민원을 제기하며 업체에 금전적 보상을 요구하는 ‘악성 소비자’를 가리키는 말은?",
        answer : "블랙컨슈머",
        view :{
            number1: "블랙컨슈머",
            number2: "얼리어답터",
            number3: "체리피커",
            number4: "헤드헌터"

        },
        hint :" 소비자를 영어로 생각해보세요 ",
        type :"상식"




    }
    ,
{
        id:13,
        question : "러시아 출신 파벨·니콜라이 두로프 형제가 당국의 메신저 검열에 반발해 독일에서 만든 비영리 모바일 메신저다. 사생활 보호에 강한 것으로 알려져 국내에서도 ‘메신저 망명처’로 주목받은 이 서비스는?",
        answer: "텔레그램",
        view :{
            number1: "위챗",
            number2: "바이두",
            number3: "텔레그램",
            number4: "우버"

        },
        hint :"텔레비전에 내가 나왔으면 정말 좋겠네",
        type :"상식"




    }
    ,
{
        id:14,
        question : "영화나 연극, 추리소설 등에서 사건해결의 실마리가 풀리지 않고 독자를 조마조마하게 하는 긴장감의 효과를 말하는 것은?",
        answer : "맥거핀",
        view :{
            number1: "맥거핀",
            number2: "미쟝센",
            number3: "서스펜스",
            number4: "클리셰"

        },
        hint :"없음",
        type :"상식"




    }
]
export default QuizList;
