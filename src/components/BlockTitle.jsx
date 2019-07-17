import React, { Component } from 'react'

export default class BlockTitle extends Component {
    constructor(props) {
        super(props);

        // state that detect if user is inputting right now
        this.state = {
            title: "Title",
            whileInput: false
        }
    }

    handleDoubleClick = () => {
        this.setState({
            whileInput: true
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onChangeTitle(this.state.title, this.props.time);
        this.setState({
            whileInput: false
        });
    }

    render() {
        let title;
        if (this.state.whileInput === false) {
            title = <h1 onDoubleClick={this.handleDoubleClick}> {this.state.title} </h1>
        } else {
            title =
                <form onSubmit={this.handleSubmit} >
                    <input
                        type="text"
                        name="title"
                        className="description"
                        required autoComplete="off"
                        value={this.state.title}
                        onChange={this.handleChange} />
                    <input
                        type="hidden"
                        value="comment"
                        className="btn" />
                </form>
        }
        return (
            <div>
                {title}
            </div>
        )
    }
}