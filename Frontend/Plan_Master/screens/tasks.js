import {FlatList, View} from "react-native";

const getTasks = () => {
    var tasks = [];
    fetch('http://localhost:3000/planMaster')
        .then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data =>{
            tasks = data;
    }).catch(error => {
        console.log(error)
    })

}
export default function Tasks() {
    return (
        <View>
            <Text>Tasks</Text>
            <FlatList
                data={getTasks()}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}