import { SizableText, isWeb, styled } from 'tamagui'

export const CustomText = styled(SizableText, {
  name: 'Text',
  tag: 'p',
  userSelect: 'auto',
  size: '$7',
  color: '$color',
  letterSpacing: 0,
  fow: '$6',
  fontFamily: '$body',
  ...(!isWeb && { allowFontScaling: false }),

  variants: {
    bold: {
      true: {
        fow: '$7',
        color: '$color',
      },
    },
  } as const,
})

export const P1 = styled(CustomText, {
  name: 'P1',
  tag: 'p',
  lh: 24,
  size: '$10',
})
