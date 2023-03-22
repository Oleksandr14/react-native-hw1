import { StyleSheet, Text, View, ImageBackground } from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("./assets/images/PhotoBG.png")}
      >
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ImageBackground: {
    flex: 1,
  },
});
