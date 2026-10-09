import ExemploStyle_Text from "@/components/ExemploStyle_Text";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

export default function Index() {
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);

  const acionarPopUp= ()=>{
    Alert.alert('Outro botão')
  }
  
  return (
    <View style={styles.container}>
      
      {/* <Pressable
        onPress={()=>{
          Alert.alert(`Campo: ${campo}`)
          }}>
        <Text>Boa noite.</Text>
      </Pressable>

      <TextInput 
        placeholder="Digite algo..."
        value={campo}
        onChangeText={(text)=> {setCampo(text)}}/>

      <Switch 
        value={ativado}
        onValueChange={(value)=>{setAtivado(value)}}/>

      <Image 
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
        style={{width: 200, height: 200}}/> */}

      <ExemploStyle_Text/>
      {/* <ExemploStyle_View/>   */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
