import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
    constructor(){
        super();
        this.setState = {
            emailId: '',
            password: ''
        }
    }
    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{return Alert.alert("User Logged In Successfully")})
        .catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message;
            return Alert.alert(errorMessage)

        })
    }
    userSignUp = (emailId, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{return Alert.alert("User Successfully Signed Up")})
        .catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message;
            return Alert.alert(errorMessage)

        })
    }
    
  render(){
      return(
    <View style = {styles.container}>
     <View style = {styles.profileContainer}>
         <Text style = {styles.title}>Barter System</Text>
     </View>
     <View style = {styles.buttonConatiner}>
    <TextInput style = {styles.loginBox}
    placeholder = "abc@example.com"
    placeholderTextColor = "black"
    keyboardType = 'email-address'
    onChangeText = {(text)=>{
        this.setState = {
            emailId: text
        }
    }}
    />
     <TextInput style = {styles.loginBox}
    placeholder = "enter password"
    placeholderTextColor = "black"
    secureTextEntry = {true}
    onChangeText = {(text)=>{
        this.setState = {
            password: text
        }
    }} />
    <TouchableOpacity style = {[styles.button, {marginBottom: 20, marginTop: 20}]}
    onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}} >
        <Text style = {styles.buttonText}>
            LOGIN
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style = {[styles.button, {marginBottom: 20, marginTop: 20}]}
    onPress = {()=>{this.userSignUp(this.state.emailId, this.state.password)}} >
        <Text style = {styles.buttonText}>
            SIGN UP
        </Text>
    </TouchableOpacity>
    </View>
    </View>
      );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "white",
},
profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
title:{
    fontSize: 55,
    fontWeight: '300',
    paddingBottom: 30,
    color: "black",
},
loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "black",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    
},
button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#008080',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
},
buttonText: {
    color: "white",
    fontWeight: '200',
    fontSize: 20,
},
buttonConatiner: {
    flex: 1,
    alignItems: 'center',
} 
})
