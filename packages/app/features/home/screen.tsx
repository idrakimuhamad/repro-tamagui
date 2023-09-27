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
        collapsable={false}
      >
        <YStack collapsable={false} f={1} jc="center" ai="center" p="$4" space>
          <Button {...linkProps} collapsable={false}>
            Go to bug screen
          </Button>
        </YStack>
        <YStack collapsable={false} p="$4">
          <Input placeholder="Placeholder" collapsable={false} />
        </YStack>
      </KeyboardAwareScrollView>
    </YStack>
  )
}
