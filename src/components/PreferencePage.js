import React,  {Component}  from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image, Button } from 'react-native';
import { Input, Card, CardSection } from './common'
import axios from 'axios';

import SwipeFunction from './SwipeFunction';


class PreferencePage extends Component {

  state = { 
    location: '', 
    term: '', 
    success: false 
  };

  onButtonPress = (term, location) => { //() {
    //const { term, location } = this.state;
  
    //this.setState({ error: '', loading: true });
  
    this.bind(this)
  }

  onStartSwipe = (term, location) => {
    this.props.navigation.navigate('Swipe');//, {text: this.state.term});
  };

render () {

  return (
    <View>
    <Card>

     <KeyboardAvoidingView behavior="position">
     
     <View style={{marginTop: 40}}>
       <Image source = {require('./Food-Map.jpg')} style={{height: 280, width: 400}}/>
     </View>
     
     <View style={{marginTop: 60}}>
         <Text style={styles.preferenceText}>
             Let Us Help:
         </Text>
     </View>    

     <View>
      <CardSection >  
        <Input 
          label="Near"
          value={this.state.location}
          onChangeText={location => this.setState({ location })}
          placeholder="New York, NY"
        />
      </CardSection>
      </View> 

     <View>
      <CardSection>
        <Input 
          label="Food"
          value={this.state.term}
          onChangeText={term => this.setState({ term })}
          placeholder="Burgers, Pizza, Sushi..."
        />
      </CardSection>
      </View> 


      <View style={{marginTop: 5, marginBottom: 5}}>

        <TouchableOpacity>
        <Button  //onPress={this.onButtonPress.bind(this)}  
          onPress= {() => this.props.navigation.navigate('SwipeFunction', 
          {term: this.state.term})}
          title="Start Swiping" />
        </TouchableOpacity> 

      </View>
     
      </KeyboardAvoidingView>

    </Card>
    </View>
  )
}
}

    
const styles= {
  preferenceText: {
    marginLeft: 22,
    fontSize: 35,
    color: "black",
    marginBottom: 20
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
  
}//STYLES



export default PreferencePage;