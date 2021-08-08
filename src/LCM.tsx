import React from "react";

interface IProps {
    message: string;
    count: number;
}

interface IState {
    count: number;
}

export default class LCM extends React.Component<IProps,IState> {
    constructor(props: IProps){
        super(props);
        this.state={
            count:props.count
        }
        console.log('constructor is invoked');
    }

    static getDerivedStateFromProps(nextProps:{}, nextState:{}) {
        console.log('getDerivedStatefromProps');
        return nextState;
    }

    public shouldComponentUpdate(){
        console.log('shouldComponentUpdate is invoked');
        return true;
    }

    public render(): JSX.Element {
        console.log('render is invoked');
        return (
            <>
            <button onClick={()=>this.updateCount()}> UpdateCount</button>
            <label>{this.state.count}</label>
            </>
        ) 
    }

    public componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    public componentDidMount() {
        console.log('componentDidMount is invoked');
    }

    private updateCount() {
        this.setState({count: this.state.count+1})
    }
}