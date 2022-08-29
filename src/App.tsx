import * as React from "react";

// import { StyleSheet, View, Text } from "react-native";
import { StyleSheet, View, Text } from "react-native";
// import { StyleSheet, Button, View, Text, NativeModules } from 'react-native';
// import {
//   initialize_fingerprint_sdk,
//   authenticate,
//   submitFingerPrintData,
// } from "../../SDK_f/src/index";
// import { processBureauTest } from "../../SDK_f/src/index";
// import { authenticate } from "react-native-otl";
// import { authenticate } from "../../SDK_o/src/index";
import {
  initialize_fingerprint_sdk,
  authenticate,
  submitFingerPrintData,
} from "react-native-fingerprint";

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();
  const [result, setResult] = React.useState<string | undefined>();
  const [result2, setResult2] = React.useState<string | undefined>();

  //Need to check if client id and session will different or same
  React.useEffect(() => {
    // multiply(3, 7).then(setResult);
    initialize_fingerprint_sdk(
      "e87cdd41-fbf3-4041-bf77-d248972204b0",
      "3464-5c68-1da5-4e25-9915-75g-0l4-59-58-92-7jfh-ffcj",
      "91957712452",
      ""
    );
    authenticate().then(setResult);
    submitFingerPrintData().then(setResult2);

    // authenticate(
    //   "8e40d5ea-d13c-451d-a1f8-1974-06699kk6a7",
    //   "919742238246",
    //   // "c6ce1a50-72bb-4bde-8d9d-646f6529aae7",  //prod
    //   "4e7ad3dc-93eb-4ef9-a1a6-4cd633e7d8f2" //stg
    // ).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>Result: </Text> */}
      <Text>Result: {result}</Text>
      <Text>Result: {result2}</Text>

      {/* <Button
        title="Submit Data"
        onPress={() => NativeModules.Fingerprint.submitData()}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
