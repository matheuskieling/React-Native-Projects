import { Text, StyleSheet } from 'react-native';

interface AppTextProps {
  bold?: boolean;
  children?: React.ReactNode;
  style?: object;
}
export default function AppText({ children, style, bold } : AppTextProps) {
  const customStyle = [] ;
  if (style) {
    if (Array.isArray(style)){
      customStyle.push(...style)
    } else {
      customStyle.push(style);
    }
  }
  const defaultStyle = {fontFamily: bold ? 'open-sans-bold' : 'open-sans'}
  customStyle.push(defaultStyle);

  return (
    <Text style={customStyle}>
      {children}
    </Text>
  )
}