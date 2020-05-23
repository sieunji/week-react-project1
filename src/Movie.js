import React,{Component} from "react";
import axiox from 'axios';
// 외부 파일 읽기, 서버연결해서 데이터 가져오기가 가능함.

class Movie extends Component{
    //movie.json 값 읽어서 처리하기
    constructor(props) {
        super(props);
        this.state={
            movie:[]
        }
        console.log("constructor(props) call..")
    }
    componentDidMount() {
        console.log("componentDidMount call..")
        axiox.get('http://localhost:3000/movie.json').then((res)=>{
            console.log(res.data)
            this.setState({movie:res.data})
        })
    }

    render() {
        console.log("render call..")
        const html= this.state.movie.map((m)=>
            <div className="col-md-4">
                <div className="thumbnail">
                    <a href="/w3images/lights.jpg">
                        <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                            <div className="caption">
                                <p>{m.title} </p>
                            </div>
                    </a>
                </div>
            </div>
        )
        return (
            <div className={"row"}>
                {html}
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate call..")
        return true;
    }
}


export default Movie;