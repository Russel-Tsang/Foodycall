import  React,   { Component } from 'react';
import { Text, View } from 'react-native';



export default class Test extends Component  {
  
 render(){
   return (

      <Text>
          {this.props.navigation.state.params.term}
      </Text>
    );
 }
}


//export default class Test extends Component {
  //render(){
    //  const { navigate } = this.props.navigation;

      //return(
       
        //      <Text> state test {this.props.navigation.state.params.term}</Text>
          //    )
            //  };
           // };