import { Input, ScrollView, XStack, YStack } from '@my/ui'
import React from 'react'

export function KeyboardScreen() {
  return (
    <YStack f={1}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        collapsable={false}
      >
        <YStack f={1} gap="$4" collapsable={false}>
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
        </YStack>
      </ScrollView>
      {/* <KeyboardAwareView collapsable={false}> */}
      <YStack collapsable={false} p="$4" bg="$background">
        <Input placeholder="Placeholder" collapsable={false} />
      </YStack>
      {/* </KeyboardAwareView> */}
    </YStack>
  )
}
