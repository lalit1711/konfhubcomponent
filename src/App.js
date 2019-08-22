import React, {useState} from 'react';
import InputBox from './components/InputBox';
import './App.css';
import 'bulma/css/bulma.min.css'
import 'font-awesome/css/font-awesome.min.css';
function App() {
  const [loading, changeLoading] = useState("");
  const changeLoadState = () => {
    const _loading = loading === "" ? "is-loading" : "";
    changeLoading(_loading);
    console.log(_loading);
   };
  return (
    <div>
      <InputBox type="email"  name="email" leftIcon="envelope" loading={loading}  rightIcon="check" />
      <button className="btn btn-primary" onClick={e => {changeLoadState()}}>Loading</button>
    </div>
  );
}

// <InputBox type="email" name="Enter Email" isRequired={true} case="none" value="" max_length={100} min_length={2} rightIcon="check" />
//       <InputBox type="text" name="Name" isRequired={true} case="none" value="" max_length={10} min_length={2} loading={loading} leftIcon="envelope" rightIcon="check" />
//       <button className="btn btn-primary" onClick={e => {changeLoadState()}}>Loading</button>

export default App;
