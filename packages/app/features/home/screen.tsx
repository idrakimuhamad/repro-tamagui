import { Button, Input, YStack } from '@my/ui'
import { KeyboardAwareScrollView } from 'app/components/aware-scroll-view'
import React from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/with-keyboard',
  })

  return (
    <YStack f={1}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <YStack f={1} jc="center" ai="center" p="$4" space>
          <Button {...linkProps}>Go to bug screen</Button>
        </YStack>
        <YStack p="$4">
          <Input placeholder="Placeholder" />
        </YStack>
      </KeyboardAwareScrollView>
    </YStack>
  )
}
