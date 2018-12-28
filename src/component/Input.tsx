import React,{ Component  } from "react";
import { View, TextInput, Text } from "react-native";


interface State {
 cari : string
}

interface Props{

}


export default class Input extends Component<Props,State>{
    constructor(props : Props){
        super(props)
        this.state={
            cari : ""
        }
    }


    render(){
        const {cari}= this.state
        return(
            <View>
                <TextInput placeholder="Ketik disini" value={cari} onChangeText={(r)=>this.setState({
                    cari : r
                })} />
                <Text>{cari ? cari : "ketik dulu"}</Text>
            </View>
        )
    }
}