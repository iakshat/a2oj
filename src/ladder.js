import React, {Component} from 'react'
import Todo from "./Todo"

class Ladder extends Component {

  state = {
    qns: []
  }

  componentDidMount(){
    var data = this.props.user_solved;
    var map = {}
    var wrongSet = {}
    data.forEach(que => {
        if(que.verdict === "OK"){
            let url = que.problem.contestId.toString()+"/"+que.problem.index;
            let submissionURL = "https://codeforces.com/contest/"+que.problem.contestId+"/submission/"+que.id;
            map[url] = submissionURL;
        }
        else if(que.verdict === "WRONG_ANSWER" || que.verdict === "MEMORY_LIMIT_EXCEEDED" || que.verdict === "RUNTIME_ERROR" || que.verdict === "TIME_LIMIT_EXCEEDED"){
            let url = que.problem.contestId.toString()+"/"+que.problem.index;
            wrongSet[url] = true;
        }
    })
    var ladder_qns = this.props.ladder_qns.map(que => {
      let url = que["Problem Link"].split("problem/")[1];
      if(map[url]){
        que.status = 1;
        return que;
      }
      if(wrongSet[url]){
        que.status = -1;
        return que;
      }
      que.status = 0;
      return que;
    })
    this.setState({
      qns: ladder_qns
    })
  }
    render() {
        return (
          <div className="center">
            <h4 className="center blue-text">{this.props.ladder_name}</h4>
            <h5 className="center blue-text">{this.props.ladder_difficulty}</h5>
            <Todo todos = {this.state.qns} />
          </div>
        )
    }
}

export default Ladder;