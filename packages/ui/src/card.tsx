import { GetProps, styled, Text, ThemeableStack } from 'tamagui'

export const Card = styled(ThemeableStack, {
  name: 'Card',
  hoverTheme: false,
  pressTheme: false,
  focusTheme: false,

  bg: '$card.bg',
  p: '$4',
  borderRadius: '$5',

  variants: {
    elevation: {
      none: {
        shadowColor: 'transparent',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 0,
        elevationAndroid: 0,
      },
      xs: {
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 1,
        elevationAndroid: 1,
      },
      sm: {
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 2,
        elevationAndroid: 3,
      },
      base: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 3,
        elevationAndroid: 3,
      },
      md: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowRadius: 6,
        elevationAndroid: 8,
      },
      lg: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowRadius: 15,
        elevationAndroid: 20,
      },
      xl: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
          width: 0,
          height: 20,
        },
        shadowRadius: 25,
        elevationAndroid: 40,
      },
    },
  } as const,

  defaultVariants: {
    elevation: 'none',
  },
})

export type CardProps = GetProps<typeof Card>

const Temp = () => (
  <Card elevation="base">
    <Text>Hello</Text>
  </Card>
)
