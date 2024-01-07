import React from "react";
import { View, TextInput } from "react-native";

const Login = () => {
  return (
    <View>
      <TextInput placeholder="Username" />
      <TextInput secureTextEntry={true} placeholder="Password" />
    </View>
  );
};

export default Login;
