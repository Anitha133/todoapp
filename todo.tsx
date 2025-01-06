/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewBase,
  FlatList,
  ImageBackground,
  Button,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const COLORS = {primary:'#1f145c',white:'#ffff',blue:'skyblue'}


const App=()=>{
  const [task,settask] = useState('')
  const [tasklist,settasklist] =useState([])
  const [button,showbutton] = useState(false)
  const [editingTask,setedit] = useState(null)

  const addtask = ()=>{
    if (task.trim().length>0){
      settasklist([...tasklist,task])
      settask('')
    }

  }
  const deletetask=(i)=>{
    const update = tasklist.filter((_,m)=>m!==i)
    settasklist(update)
  }
  const edittask = (i,j)=>{
    showbutton(true)
    settask(j)
    setedit(i)
    
  }
  const updatetask=()=>{
    const updatedTasks = tasklist.map((t,i) =>
      i === editingTask ? task : t
    ); 
    settasklist(updatedTasks)
    settask('');
    setedit(null); 
    showbutton(false); 
  }
  
  return (
    <SafeAreaView style={{padding:20, flex:1, backgroundColor:'pink'}}>
      <View>
        <View style={styles.header}>
          <View style={styles.header}>
            <TextInput placeholder='Add Todo' style={{fontSize:16.5,paddingHorizontal:20}} value={task} onChangeText={text=>settask(text)}></TextInput>
          </View>
          <TouchableOpacity onPress={addtask}>
            <View style={styles.iconcontainer}>
              <Icon name="plus" color='white' size={15}></Icon>
            </View>
          </TouchableOpacity>
        </View>


        <View style={{marginTop:45}}>
          <FlatList data={tasklist} 
          renderItem={({item,index})=>
            <View style={styles.addtask}>
              <Text>{index+1}. {item}</Text>
              <TouchableOpacity style={{position:'absolute', right:10,padding:10}}
              onPress={()=>deletetask(index)}>
                <Icon size={25} name="trash" color="red"></Icon>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>edittask(index,item)} style={{position:'absolute', right:40,padding:10}}>
                <Icon size={25} name="pencil" color="green"></Icon>
              </TouchableOpacity>
            </View>
          }/>


          {button && (
            <TouchableOpacity onPress={updatetask}>
              <View style={styles.savebutton}>
                <Text style={{color:'white',padding:10,textAlign:'center'}}>Save</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  header:{
    height:50,
    flex:1,
    flexDirection:'row',
    backgroundColor:'white'
    
  },
  head:{
    flex:1,
    flexDirection:'row',
  },
  iconcontainer:{
    width:50,
    height:50,
    backgroundColor:'green',
    padding:17

  },
  inputContainer:{
    backgroundColor:'white',
    padding:10,
    height:50
  },
  addtask:{
    backgroundColor:'white',
    padding:10,
    paddingHorizontal:20,
    marginTop:17,
    display:'flex',
    flexDirection:'row'
  },
  savebutton:{
    backgroundColor:'green',
    color:'white',
    marginTop:17,
  }
})
  


export default App;
