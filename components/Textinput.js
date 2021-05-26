import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button, ScrollView,FlatList,StyleSheet, ViewPagerAndroidComponent } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
// import { UsageState } from 'webpack';






export default function Textinput() {
    const [idk,setid] = useState([])
    const [entered,enterredtask] = useState('')
    const [enter,entereddate]= useState('')
    const [enteredvaluedate,setenteredvaluedate]=useState([])
    const [tasks,settasks]= useState([])
    const [toggle,changetoggle] = useState('false')
    useEffect(()=>{
        readData();
    },[])
    

    
    const readData = async () => {
        try {
          let userAge = await AsyncStorage.getItem("test")
          let gettasks = JSON. parse(userAge);
            
          if (gettasks !== null) {
            settasks(gettasks)
            console.log(tasks)
            console.log('data fetched succesfully')
            
                                      
     }
        } catch (e) {
          alert('Failed to fetch the data')
          alert(e)
        }
      }
    const goalhandler =(val)=>{
        enterredtask(val)
        
        
    }
    const datehandler =(val)=>{
        entereddate(val)
    }
    const goalprinter= ()=>{
        const data = [...tasks,{key:Math.floor(Math.random() * 1000).toString(),value:entered,date:enter }]
        settasks(data)
        console.log(JSON.stringify(tasks))

        const saveData = async () => {
            try {
              await AsyncStorage.setItem("test",JSON.stringify(data))
              console.log('data saved succesfully')  
              console.log(tasks)
            } catch (e) {
              alert(e)
            }
          }
          saveData();
        } 
        

        
        
    const changetooglestyle = () => {
        {toggle == 'false' ? changetoggle('true') : 'false'}
        {toggle == 'true' ? changetoggle('false') : 'true'}
        
        console.log(toggle)
    }
    const deletetask = async (key) => {
        settasks(tasks.filter((task) => task.key !== key));
        console.log(tasks)
        
        let stringdata = JSON.stringify(tasks);
        await AsyncStorage.setItem("test",stringdata);
        

    }

    const cleardata = async () =>{
        await AsyncStorage.removeItem("test");

    }

    
    
   
    
        return ( 
            <ScrollView style={styles.body} >
               
               <View style={{flexDirection:'row',marginTop:25,height:45}}>
                        <Text style={styles.head}>Task Traker</Text>
                    <View style={styles.add}>
                        <Button onPress={changetooglestyle} color='#00cc00' title='add'/>
                    </View>
               </View>
                <View style={toggle == 'false' ? styles.taskhead : styles.close}>  
                    <View style={toggle == 'false' ? styles.textinput : styles.close}>
                        <TextInput style={toggle == 'false' ? styles.taskinput : styles.close} onChangeText={goalhandler} placeholder='Add your task' />
                        <TextInput style={toggle == 'false' ? styles.dateinput : styles.close} onChangeText={datehandler} placeholder='Add your task date' /> 
                    </View>
                    <View style={styles.but}>
                        <Button color='black' onPress={goalprinter} title='add' />
                    </View> 
                </View>

                

                <View  style={styles.list1}>
                 
                    <View  style={styles.list}>
                    
                    {tasks.map((task)=> <Text onLongPress={() => deletetask(task.key)}  style={styles.outputtask} key={task.key}>
                        <View style={{flexDirection:'column'}}>
                                <Text style={styles.newtask} >{task.value}</Text>
                                <Text style={styles.newdate} >{task.date}</Text>
                        </View>
                        
                    </Text>)}
                    </View>
                    
                    
                    

                </View>
                <Button onPress={cleardata} title='clear' />
                
                
            </ScrollView>
        )
           
        
           
          
        }
        const styles = StyleSheet.create({
            body:{
                marginRight:10,
                marginLeft:10,
            },
            tasks:{
                flexDirection:'row',
                
            },
            config:{
                flexDirection:'row'
            },
            list:{
                width:340,
             },
            list1:{
                padding:0,
                marginLeft:0,
                marginVertical:0,
                flexDirection:'row',
                marginTop:30,
            },
            list2:{
                
                marginLeft:0,

            },
            taskhead:{
                flexDirection:'column',
                borderColor:'black',
                borderWidth:5,
                marginTop:30,
                marginBottom:30,
                borderRadius:10
            },
            taskheadtext:{
                fontSize:30,
                marginBottom:10,
            },
            taskheadtext1:{
                fontSize:30,
                width:170,
                marginBottom:10,
            },
            textinput:{
                flexDirection:'column'
            },
            but:{
                marginBottom:20,
                margin:20
            },
            taskinput:{
                borderWidth:1,
                borderColor:'black',
                margin:10,
                borderRadius:10,
                padding:10,
                marginTop:20
            },
            dateinput:{
                borderWidth:1,
                borderColor:'black',
                margin:10,
                borderRadius:10,
                padding:10
            },
            outputtask:{
                fontSize:15,
                backgroundColor:'white',
                marginTop:10,
                padding:10,
                borderColor:'black',
                borderWidth:1

                
            },
            head:{
                fontSize:40,
                marginLeft:20,
                width:250 
              },
              add:{
                marginTop:15,
                height:40,
                
              },
              close:{
                  width:0,
                  height:0,
                  
                borderColor:'white',
                borderWidth:0,
                marginTop:0,
                marginBottom:0,
                borderRadius:0
                  
              },
              newtask:{
                  color:'black'
              }


            
        })
    
         // to do at it class 
                    
        // what is isp write any  examples 
        // which are the different types of internet connections 
        // What is 3g        hspda 4g 
            //  world wide inter operability for microwave access 