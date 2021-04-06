import React from "react";

// const arr = [10,100,514,200];
// console.log(arr);
// 오름차순 정렬
// arr.sort((a, b) => a - b);

// 내림차순 정렬
// arr.sort((a, b) => b - a);


export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
        console.log(props);
    }

    handleClick(props) {
        // this.props.test()
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button
                className="btnIconSort"
                onClick={this.handleClick}
            >
                {this.state.isToggleOn ? "▼" : "▲"}
            </button>
        );
    }
}
