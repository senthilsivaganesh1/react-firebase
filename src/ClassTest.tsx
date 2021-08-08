import React from "react";

interface IProps {
    message: string;
}

interface IState {
    count: number;
}

export default class ClassTest extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            count: 0
        }
    }

    public render(): JSX.Element{
        return (
            <>
            <label>{this.props.message}</label>
            <label>{this.state.count}</label>
            <button onClick={()=>this.setState({count:this.state.count+1})}>increment by one</button>
            </>
        )
    }
}