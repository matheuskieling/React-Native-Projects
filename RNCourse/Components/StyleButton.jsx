import {Text, TouchableOpacity} from "react-native";

export default function StyleButton({ onPress, height, width, title, color = "white", backgroundColor = '#2196F3' , paddingVertical = 10, paddingHorizontal = 16 }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <Text style={{ color: color, textAlign: 'center', fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}