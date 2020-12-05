import React, {Component} from 'react';
import Ladder from './ladder'
import LadderMenu from './ladderMenu'

class App extends Component {
  state = {
    ladder_chosen: null,
    ladder: {},
    allLadders: []
  }

  setLadder = (name) => {
    this.setState({
      ladder_chosen:name,
      ladder: this.state.allLadders.filter(ladder => ladder["ladder name"] === name)[0]
    })
  }

  componentDidMount(){
    console.log("Mounted!")
    fetch("/a2oj/ladders.json")
    .then(res => res.json())
    .then(response => {
      console.log("ladders: ",response)
      this.setState({
        allLadders: response
      })
    })
    var username = "iakshat"//prompt("cf username??");
    fetch("https://codeforces.com/api/user.status?handle="+username+"&from=1&count=5000")
    .then(res => res.json())
    .then(res => {
      this.setState({
        user: res.result
      })
    })
  }

  render() {
    console.log("ladder_chosen: ",this.state.ladder_chosen)
    console.log("state: ", this.state)

    var toShow = this.state.ladder_chosen ? (
      <Ladder ladder_name={this.state.ladder["ladder name"]} user_solved={this.state.user} ladder_difficulty={this.state.ladder["ladder difficulty"]} ladder_qns={this.state.ladder["ladder questions"]}></Ladder>
    ) : (
      <LadderMenu setLadder={this.setLadder}></LadderMenu>
    )
    return (
      <div className="App container">
        {toShow}
      </div>
    )
  }
}

export default App;
