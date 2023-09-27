import { useResizeMode } from "react-native-keyboard-controller"
import ScrollView, {
  KeyboardAwareScrollViewProps,
} from "./KeyboardAwareScrollView"
// import { ScrollView } from "react-native"

/**
 * Keyboard aware scroll view implementation
 * that uses RN keyboard controller
 * excerpt taken from the package example with minor changes
 * @param props KeyboardAwareScrollViewProps
 * @returns KeyboardAwareScrollView
 */
export function KeyboardAwareScrollView(props: KeyboardAwareScrollViewProps) {
  useResizeMode()

  return <ScrollView style={{ flex: 1 }} {...props} />
}
