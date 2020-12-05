import React, {Component} from 'react'

class newTodo extends Component{

    state={
        content : null
    }

    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content : ''
        })
    }

    render() {

        return (
            <div className="center collection-item">
                <form onSubmit={this.handleSubmit}>
                    <label>New To do: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )


    }

}

export default newTodo;