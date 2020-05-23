import React,{Component,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

/*
    import React from 'react'; 일 때
    class 클래스 명 extends React.Component


*   1. class 기반 =====> 여러 개의 기능을 사용할 때 사용
*   형식) 
*           class 클래스 명 extends Component
*           {
*               constructor()        // 생성자
*               componentWillMount() // 메모리에 올리는 과정을 mount 라고 함. 이건 즉, 올리기 전 상태를 의미
*               render(){}           // willmount에서 읽은 데이터를 출력
*               componentDidMount()  // 화면이 뜨는 것 ==> 제이쿼리에서 $(function(){}) window.onload 이것과 비슷
*            }
* 
*   2. function 기반  ==> 한 개의 기능만 써도 될 때 사용, 간단한데 데이터 넘겨주는게 어렵다. 그래서 HOOK을 사용한다.
*   형식)
*           function 기능명()
*           {
*                   return(
*                       <html></html>
*                   )
*           }
*
    JXS 문법 => html 데이터 만들 때 사용
    ===
    javascript +XML (문법사항은 XML을 따라감)
    1) 반드시 계층구조를 만든다.
       ex) <div>HELLO</div>
           <div>REACT</div>   ===> ERROR

           <div>
               <div>HELLO</div>
               <div>REACT</div>
           </div>             ===> OK

    2) html 태그는 반드시 소문자로 작성한다.
       ex) <Html> => function이나 class로 인식해버린다. (얘네 둘은 대문자로 작성해야함)

    3) 속성은 반드시 "" 안에 적는다.
       ex) <table width=100> ==> error
           <table width="100"> ==> ok

    4) 여는 태그 <a>, 닫는태그</a>, 빈 태그 <br/>가 명확하게 일치해야 한다.



* */
class App extends Component{
    constructor() {       //선택 입력
        super();          // 멤버 변수 선언, 이벤트 등록시 사용
    }
    componentDidMount() { //선택 입력
                          //데이터를 서버에서 전송 받거나, JQUERY 연동시 사용
    }
    render() {            //필수 입력
                          //화면 출력하는 역할
       return(
           <Fragment>
               <div>{this.props.name}</div>
               <div>{this.props.sex}</div>
           </Fragment>
       )
    }
}

export default App;
