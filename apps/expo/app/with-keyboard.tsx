import { KeyboardScreen } from 'app/features/keyboard/screen'
import { Stack } from 'expo-router'

export default function WithKeyboardScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Keyboard',
        }}
      />
      <KeyboardScreen />
    </>
  )
}
