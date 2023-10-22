import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { BigButton, FlexFill, LabelText, TitleText } from "./Shared";
import { useState } from "react";
import sharedStyles from "./styles";
import { genid, log, range } from "./utils";

export default function NavDemo() {
  return (
    <View style={styles.container}>
      <TitleText>Simple Navigation Demo</TitleText>
      <BigButton title="Add entry" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddf",
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 10,
    gap: 8,
  },
});
