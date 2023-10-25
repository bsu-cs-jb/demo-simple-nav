import React, { useMemo, useState } from "react";
import {
  PixelRatio,
  StyleSheet,
  View,
  TouchableHighlight,
  ViewProps,
  useWindowDimensions,
  Text,
} from "react-native";
import { dims } from "./DeviceSettings";
import { log } from "./utils";
import { ScaleContext, makeScaleFn } from "./ScaleContext";

export default function IPhone14Device(props: ViewProps) {
  const [scale, setScale] = useState(1.0);
  const scaleStyle = useMemo(() => {
    return makeScaleFn(scale);
  }, [scale]);

  const { width, height } = useWindowDimensions();
  console.log(`Window dimensions: `, { width, height });

  console.log(`pixel ratio ${PixelRatio.get()}`);

  const handleZoomReset = () => {
    setScale(1.0);
  };
  const handleZoomMinus = () => {
    setScale(scale - 0.1);
  };
  const handleZoomPlus = () => {
    setScale(scale + 0.1);
  };
  return (
    <ScaleContext.Provider value={{ scale, scaleStyle }}>
      <View style={scaleStyle(styles.deviceShell)}>
        <View style={scaleStyle(styles.deviceScreen)}>{props.children}</View>
        {/* <View style={scaleStyle(styles.notch, ["height", "top", "width"])} /> */}
        <View style={scaleStyle(styles.notch)} />
        <View style={scaleStyle(styles.bottomBar)} />
        <TouchableHighlight
          style={scaleStyle(styles.zoomMinus)}
          onPress={handleZoomMinus}
          hitSlop={{ left: 5, right: 5 }}
        >
          <Text>-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={scaleStyle(styles.zoomText)}
          onPress={handleZoomReset}
          hitSlop={{ left: 5, right: 5 }}
        >
          <Text>{Math.round(scale * 100)}%</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={scaleStyle(styles.zoomPlus)}
          onPress={handleZoomPlus}
          hitSlop={{ left: 5, right: 5 }}
        >
          <Text>+</Text>
        </TouchableHighlight>
      </View>
    </ScaleContext.Provider>
  );
}

const baseStyles = StyleSheet.create({
  zoom: {
    position: "absolute",
    height: 22,
    width: 22,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const styles = StyleSheet.create({
  deviceShell: {
    width: dims.width,
    height: dims.height,
    borderRadius: dims.outerBorderRadius,
    borderColor: "#0f0",
    backgroundColor: "black",
  },
  deviceScreen: {
    flex: 1,
    backgroundColor: "#fff",
    margin: dims.innerMargin,
    borderRadius: dims.innerBorderRadius,
    overflow: "hidden",
  },
  notch: {
    position: "absolute",
    height: 34,
    width: 175,
    backgroundColor: "pink",
    top: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignSelf: "center",
  },
  zoomText: {
    ...baseStyles.zoom,
    width: 55,
    top: 20,
    right: 75,
  },
  zoomMinus: {
    ...baseStyles.zoom,
    top: 20,
    left: 50,
  },
  zoomPlus: {
    ...baseStyles.zoom,
    top: 20,
    right: 50,
  },
  bottomBar: {
    position: "absolute",
    height: 6,
    width: 160,
    backgroundColor: "black",
    bottom: 28,
    borderRadius: 4,
    alignSelf: "center",
  },
});
