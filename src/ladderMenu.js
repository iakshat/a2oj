import React, {Component} from 'react'

class LadderMenu extends Component {

    state = {
        ladders: ["Ladder Name: 11 - Codeforces Rating < 1300 (by ahmed_aly)", "Ladder Name: 12 - 1300 <= Codeforces Rating <= 1399 (by ahmed_aly)", "Ladder Name: 13 - 1400 <= Codeforces Rating <= 1499 (by ahmed_aly)", "Ladder Name: 14 - 1500 <= Codeforces Rating <= 1599 (by ahmed_aly)", "Ladder Name: 15 - 1600 <= Codeforces Rating <= 1699 (by ahmed_aly)", "Ladder Name: 16 - 1700 <= Codeforces Rating <= 1799 (by ahmed_aly)", "Ladder Name: 17 - 1800 <= Codeforces Rating <= 1899 (by ahmed_aly)", "Ladder Name: 18 - 1900 <= Codeforces Rating <= 1999 (by ahmed_aly)", "Ladder Name: 19 - 2000 <= Codeforces Rating <= 2099 (by ahmed_aly)", "Ladder Name: 20 - 2100 <= Codeforces Rating <= 2199 (by ahmed_aly)", "Ladder Name: 21 - Codeforces Rating >= 2200 (by ahmed_aly)", "Ladder Name: 22 - Codeforces Rating < 1300 (Extra) (by ahmed_aly)", "Ladder Name: 23 - 1300 <= Codeforces Rating <= 1399 (Extra) (by ahmed_aly)", "Ladder Name: 24 - 1400 <= Codeforces Rating <= 1499 (Extra) (by ahmed_aly)", "Ladder Name: 25 - 1500 <= Codeforces Rating <= 1599 (Extra) (by ahmed_aly)", "Ladder Name: 26 - 1600 <= Codeforces Rating <= 1699 (Extra) (by ahmed_aly)", "Ladder Name: 27 - 1700 <= Codeforces Rating <= 1799 (Extra) (by ahmed_aly)", "Ladder Name: 28 - 1800 <= Codeforces Rating <= 1899 (Extra) (by ahmed_aly)", "Ladder Name: 29 - 1900 <= Codeforces Rating <= 1999 (Extra) (by ahmed_aly)", "Ladder Name: 30 - 2000 <= Codeforces Rating <= 2099 (Extra) (by ahmed_aly)", "Ladder Name: 31 - 2100 <= Codeforces Rating <= 2199 (Extra) (by ahmed_aly)", "Ladder Name: 32 - Codeforces Rating >= 2200 (Extra) (by ahmed_aly)"]
    }
    render() {
        var list = this.state.ladders.map((ladder_name, id) => {
            return (
                <div className="collection-item" key={id} onClick={() => {this.props.setLadder(ladder_name)}}>
                    <span>{ladder_name}</span>
                </div>
            )
        })
        return (
          <div className="center collection">
            <h3 className="center blue-text">Ladders</h3>
            <div className="collection center blue-text">
                {list}
            </div>
          </div>
        )
    }
}

export default LadderMenu;