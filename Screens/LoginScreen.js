import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const initialValue = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [secureState, setSecureState] = useState(true);
  const [focusForm, setFocusForm] = useState(false);
  const [state, setState] = useState(initialValue);

  const sendState = () => {
    console.log(state);
    setState(initialValue);
  };

  const boardHideTouch = () => {
    setFocusForm(false);
    Keyboard.dismiss();
  };

  const keyBoardHide = () => {
    setFocusForm(false);
    Keyboard.dismiss();
    sendState();
  };

  return (
    <TouchableWithoutFeedback onPress={boardHideTouch}>
      <View
        style={{
          ...styles.registerWrapper,
          ...Platform.select({
            ios: {
              height: focusForm ? 539 : 489,
            },
            android: {
              height: focusForm ? 339 : 489,
            },
          }),
        }}
      >
        <Text style={styles.registerTitle}>Log in</Text>

        <View style={styles.form}>
          <View style={styles.formHelper}>
            <View style={styles.formContainer}>
              <TextInput
                value={state.email}
                style={styles.input}
                placeholder="Email address"
                onFocus={() => setFocusForm(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <TextInput
                value={state.password}
                secureTextEntry={secureState}
                style={styles.input}
                placeholder="Password"
                onFocus={() => setFocusForm(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
            </View>

            <TouchableOpacity
              style={styles.showPass}
              onPress={() => setSecureState(!secureState)}
            >
              <Text style={styles.showPassText}>
                {secureState ? "Show" : "Hide"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={keyBoardHide}
          >
            <Text style={styles.btnTitle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.haveAcc}>Already have an account? Log in</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registerWrapper: {
    position: "relative",
    marginTop: "auto",
    paddingTop: 32,
    paddingBottom: 45,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    ...Platform.select({
      ios: {
        width: 375,
      },
      android: {
        width: "100%",
      },
    }),
  },
  registerTitle: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
    fontWeight: 500,
    fontSize: 30,
    color: "#212121",
  },
  formHelper: {
    position: "relative",
  },

  formContainer: {
    gap: 16,
  },
  input: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    height: 50,
    fontSize: 16,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  showPass: {
    position: "absolute",
    bottom: 15,
    right: 16,
  },
  showPassText: {
    color: "#1B4371",
    fontSize: 16,
  },

  btn: {
    marginTop: 59,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnTitle: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    color: "#fff",
  },
  haveAcc: {
    marginTop: 16,
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default LoginScreen;
