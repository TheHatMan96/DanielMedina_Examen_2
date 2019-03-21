import React, { Component } from "react";
import {Button  } from "@material-ui/core";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";
  const mapStateToProps = state => ({
    codes: state.code,
    codes2: state.code2
});
  
const mapDispatchToProps = dispatch => ({
    changeCode: code=>dispatch(ACTIONS.changeCode(code)),
    changeCode: code2=>dispatch(ACTIONS.changeCode(code2))
});

  
class Home extends Component{

    constructor(){
        super();
        this.state={
            code:"Bienvenido",
            code2: "Weather App"
        }
    }
    
    handleSubmit = event => {
         console.log(this.props);        
         this.props.changeCode(this.state.code);
         //this.props.changeCode2(this.state.code2);
            event.preventDefault();
    };
    
    render(){
    return(
    <div>
        <h1>{this.props.codes}</h1>
        <h1>{this.props.codes2}</h1>
        <br></br>
        <Button variant="outlined" align="center" onClick={(event) => this.handleSubmit(event)}>INTERCALAR</Button>

    </div>
        );
    
    }
    
    
    
    }
      export default connect(mapStateToProps, mapDispatchToProps)(Home);