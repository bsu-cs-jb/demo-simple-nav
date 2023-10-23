import { StyleSheet, View } from "react-native";
import { BigButton, SubtitleText } from "./Shared";
import { StackScreenProps } from "@react-navigation/stack";
import { NavDemoStackRouteParamList } from "./NavDemo";

// Create the View Props type for the Main view
type MainViewProps = StackScreenProps<NavDemoStackRouteParamList, "Main">;

export default function MainView({ navigation }: MainViewProps) {
  return (
    <View style={styles.main}>
      <SubtitleText>You are inside of Main</SubtitleText>
      <BigButton
        title="Navigate to Second"
        onPress={() =>
          navigation.navigate("Second", {
            name: "Jeremy",
            depth: 1,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ddf",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 8,
  },
});
