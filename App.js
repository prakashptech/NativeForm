import React from 'react';
import {View, Button, Text, TextInput} from 'react-native';
class App extends React.Component {
constructor() 
  {
      super();
      this.state = {
          name:' ',
          email: ' ',
          password: ' ',
      };
  }
  submit() {
      console.warn(this.state);
  }
  render () {
      return (
        
        <View style={{margin: 20, marginTop: 100}} >
        <Text>SignUp Form </Text>
        <TextInput 
          placeholder="Enter your name"
          onChangeText={ (text) => {this.setState({name: text})}}
          style = { {borderWidth:2, borderColor:'blue', margin:20}}
        />
        
        <TextInput 
          placeholder="Enter your Email"
          onChangeText={ (text) => {this.setState({email: text})}}
          style = { {borderWidth:2, borderColor:'blue', margin:20}}
        />
        <TextInput 
          placeholder="Enter your Password"
          secureTextEntry={true}
          onChangeText={ (text) => {this.setState({password: text})}}
          style = { {borderWidth:2, borderColor:'blue', margin:20}}
        />
        <Button title = "Sign Up" onPress={ () =>{this.submit()}}
        style = { {borderWidth:2, innerWidth:1, borderColor:'blue', margin:20}} />
      </View>
    
      
      );
  };
}
export default App;