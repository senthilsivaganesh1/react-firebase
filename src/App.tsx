// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { ScreenA } from './screenA';
import { ScreenB } from './screenB';
import { ScreenC } from './screenC';
// import ClassTest from './ClassTest';
import { LifeCycleMethods } from './LifeCycleMethods';
import UseState from './UseState';
import UseEffectParent from './UseEffectParent';
import UseEffectApiExample from './UseEffectApiExample';
import UseContextParent from './UseContext';
import ReducerUIExample from './ReducerUIExample';
import LCM from './LCM';
import ReactHookForm from './ReactHookForm';
import { Profile } from './Profile';
import { Login } from './Login';
import HotelsPage  from './HotelsPage';

 function App() {
  // const history = useHistory();
  return (
    // <>
    // <div>Geeks for Geeks</div>
    // <div>Hello</div>
    // </>
    
    <>
    {/* <label>this is home page</label> */}
    {/* <button onClick={()=>history.push("/a")}>go to a page</button>
    <button onClick={()=>history.goBack()}> back button</button> */}
    <BrowserRouter>
    <Route exact={true} path='/hotel' component={HotelsPage}></Route>
    <Route exact={true} path='/login' component={Login}></Route>
    <Route exact={true} path='/profile' component={Profile}></Route>
      <Route exact={true} path='/signup' component={ReactHookForm}></Route>
      <Route exact={true} path='/a' component={ScreenA}></Route>
      {/* <Route exact={true} path='/b' component={screenB}></Route> */}
      <Route exact={true} path='/b' render={renderB}></Route>
      <Route exact={true} path='/c/:userId' render={renderC}></Route>
      <Route exact={true} path='/LifeCycleMethods' render={renderLifeCycleMethods}/>
      <Route exact={true} path='/UseState' component={UseState}/>
      <Route exact={true} path='/UseEffectParent' component={UseEffectParent}/>
      <Route exact={true} path='/UseEffectApiExample' component={UseEffectApiExample}/>
      <Route exact={true} path='/UseContextParent' component={UseContextParent}/>
      <Route exact={true} path='/ReducerUIExample' component={ReducerUIExample}/>
      <Route exact={true} path='/LCM' render={renderLCM}/>

    </BrowserRouter>
    {/* <ClassTest message={"this is class based component"}/> */}
    </>
  );
}

function renderLCM() {
  return <LCM message={"props message"} count={0}/>
}

function renderB(){
  return <ScreenB message={"parent calling"}/>
}

function renderC(props: any){
  return <ScreenC {...props}/>
}

function renderLifeCycleMethods(): JSX.Element {
  return <LifeCycleMethods message={"parent invoked it"}
  count={10}/>
}
export default App;
