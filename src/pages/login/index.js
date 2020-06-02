import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import './index.less';

class Login extends Component {
  gotoHome() {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="p-login">
        <h1>Login page</h1>
        <p>login: myData = {this.props.myData}</p>
        <button onClick={() => { this.props.setData('123456') }}>更改login的myData</button>
        <br/>
        <button onClick={() => this.gotoHome()}>跳转Home页</button>
      </div>
    )
  }
}

// 把store中的数据映射到组件的props
const mapStateToProps = (state) => {
  console.log(state);
  return ({
    myData: state.login.myData,
  })
}

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => ({
  setData(data) {
    const action = actionCreators.setData(data)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
