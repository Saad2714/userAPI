import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { Card, CardItem } from "native-base";

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      }
};

getUserFromApi = ()=> {
  fetch("https://randomuser.me/api/?results=5")
  .then(response => response.json())
  .then(responseJson => {
    this.setState({
      isLoading:false,
      // responseJson.results, yes results is vey important... see json  formatter view
      dataSource: this.state.dataSource.concat(responseJson.results)
    })
  })
  .catch(error => console.log(error))
};

componentDidMount(){
  this.getUserFromApi();

}



render(){
  if (this.state.isLoading){
    return (
      <View>
        <ActivityIndicator size = "large" color = "#4834DF" />
      </View>
    )
    }
  
    return (
    <View style={styles.container}>
      <Text>Let's create An App</Text>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
