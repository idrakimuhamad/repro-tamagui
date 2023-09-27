import { Lato_400Regular, Lato_700Bold, Lato_900Black } from '@expo-google-fonts/lato'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { KeyboardProvider } from 'react-native-keyboard-controller'

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Lato: Lato_400Regular,
    LatoBold: Lato_700Bold,
    LatoBlack: Lato_900Black,
  })
  const scheme = useColorScheme()

  if (!loaded) {
    return null
  }
  return (
    <KeyboardProvider statusBarTranslucent>
      <Provider>
        <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack />
        </ThemeProvider>
      </Provider>
    </KeyboardProvider>
  )
}
