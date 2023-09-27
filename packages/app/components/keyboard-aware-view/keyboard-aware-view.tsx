import { YStack, YStackProps } from '@my/ui'
import { KeyboardProvider, useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller'

import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

export type KeyboardAwareViewProps = YStackProps & {
  keyboardAware?: boolean
  offset?: number
}

const AnimatedBox = Animated.createAnimatedComponent(YStack)

export function KeyboardAwareView({
  keyboardAware = true,
  offset = 0,
  ...props
}: KeyboardAwareViewProps) {
  const { height, progress } = useReanimatedKeyboardAnimation()
  const viewStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      progress.value,
      [0, 1],
      [0, keyboardAware ? height.value + offset : 0]
    )

    return {
      transform: [
        {
          translateY,
        },
      ],
    }
  }, [keyboardAware, progress, height, offset])

  // const viewStyle = {}

  return <AnimatedBox {...props} style={[props.style, viewStyle]} />
}

export { KeyboardProvider }
