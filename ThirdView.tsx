import { StyleSheet, View } from "react-native";
import { BigButton, LabelText, SubtitleText } from "./Shared";
import { StackScreenProps } from "@react-navigation/stack";
import { NavDemoStackRouteParamList } from "./NavDemo";
import { log } from "./utils";

type ThirdViewProps = StackScreenProps<NavDemoStackRouteParamList, "Popup">;
const ThirdView = ({ navigation, route }: ThirdViewProps) => {
  log(route);
  const name = route.params.name;
  const depth = route.params.depth;

  return (
    <View style={styles.second}>
      <SubtitleText>You are inside of Third</SubtitleText>
      <LabelText>
        Hi {name}! Depth: {depth}
      </LabelText>
      <BigButton
        title="Navigate to Main"
        onPress={() => navigation.navigate("Main")}
      />
      <BigButton title="Navigate back" onPress={() => navigation.goBack()} />
      <BigButton
        title="Push another Second"
        onPress={() =>
          navigation.push("Second", {
            name: name,
            depth: depth + 1,
          })
        }
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  second: {
    flex: 1,
    backgroundColor: "#c0d0d0",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 8,
  },
});

export default ThirdView;
