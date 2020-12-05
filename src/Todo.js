import React from 'react'

var Todo = ({todos}) => {

    var todoList = todos.length ? (
        todos.map(que => {
            let boxClass = que.status === 1 ? (" teal accent-4 white-text") : (
                que.status === -1 ? (" red accent-4 white-text") : (" blue-text")
            );
            // let boxClass = "";
            return(
                <div className={"collection-item" +boxClass} key={que.id}>
                    <a href={que["Problem Link"]} style={{color:"inherit"}} target="_blank" rel="noopener noreferrer">{que["Problem Name"]}</a>
                </div>
            )
        })
    ) : (
        <div className="collection-item">
            "You have no qns here!!!"
        </div>
    )

    return(
        <div className="center collection">
            { todoList }
        </div>
    )

}

export default Todo