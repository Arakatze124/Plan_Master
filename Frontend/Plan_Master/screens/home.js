import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      ></Button>
    </View>
  );
};

export default Home;
