import React, { useState } from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableHighlight, } from 'react-native';

const ParagraphDetail = () =>{
  
  var MadanParagraph  = "Madan Gowri is an Indian YouTuber with over 1.5 Million subscribers on his YouTube channel, which he created on December 5, 2013. He was born on 28th May 1988 (Birthday), in Madurai, Tamil Nadu,"+
                        "India. Madan's Current age will be 28 years, 7 month, 15 days https://github.com/Jaffrinsampaul"

  const [isReadMore, setISReadMore] = useState(true);

  var resultString = isReadMore ? MadanParagraph.slice(0, 100) : MadanParagraph;

  return (
    <SafeAreaView style={styles.container}>  
      <Text>
            {resultString}
        </Text>
      <TouchableHighlight style= {styles.textButton} onPress={()=> {setISReadMore(isReadMore == false)}}> 
        <Text>{isReadMore ? "Read More" : "Read Less"}</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    justifyContent: 'center', 
    fontFamily: "Cochin", 
    alignItems: 'center',
    color: "#141823"
  },
  textButton:{
    color: "white",
  }
})

export default ParagraphDetail;
