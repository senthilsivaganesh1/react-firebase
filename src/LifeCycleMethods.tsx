import React from "react";

interface IState{
    count: number;
}
interface IProps{
    message: string;
    count: number;
}
export class LifeCycleMethods extends React.Component<IProps,IState>{
    constructor(props: IProps){
        super(props);
        this.state={
            count : props.count
        }
        //initialize the state
        console.log('constructor is invoked');
    }
    static getDerivedStateFromProps(nextProps:{}, nextState:{}){
        console.log('getDerivedStateFromProps is invoked');
        return nextState;
    }

    public shouldComponentUpdate() {
        console.log("should Component update is invoked");
        return true;
    }

    public getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate is invoked');
    }

    public componentDidUpdate(){
        console.log('component did update is invoked');
    }

    public componentDidMount() {
        console.log('componentDidMount is invoked');
    }
    public render(): JSX.Element{
        // return <div>Lifecycle Methods</div>
        return <button onClick={()=>this.updateCount()}>update count</button>
    }

    private updateCount(){
        this.setState({count:this.state.count+1});
    }
}