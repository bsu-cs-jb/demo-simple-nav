import { StyleSheet, View } from "react-native";
import { BigButton, SubtitleText } from "./Shared";
import { StackScreenProps } from "@react-navigation/stack";
import { NavDemoStackRouteParamList } from "./NavDemo";

type SecondViewProps = StackScreenProps<NavDemoStackRouteParamList, "Second">;
export default function SecondView({ navigation }: SecondViewProps) {
  return (
    <View style={styles.second}>
      <SubtitleText>You are inside of Second</SubtitleText>
      <BigButton
        title="Navigate to Main"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  second: {
    flex: 1,
    backgroundColor: "#fdd",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 8,
  },
});
