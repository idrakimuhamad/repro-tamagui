import { Input, ScrollView, XStack, YStack } from '@my/ui'
import { KeyboardAwareView } from 'app/components/keyboard-aware-view'
import React from 'react'
import { KeyboardAvoidingViewProps } from 'react-native'

type Behavior = KeyboardAvoidingViewProps['behavior']
const behaviors: Behavior[] = ['padding', 'height', 'position']

export function KeyboardScreen() {
  return (
    <YStack f={1}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <YStack f={1} gap="$4">
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
          <XStack h={100} bg="green" />
        </YStack>
      </ScrollView>
      <KeyboardAwareView>
        <YStack p="$4" bg="$background">
          <Input placeholder="Placeholder" />
        </YStack>
      </KeyboardAwareView>
    </YStack>
  )
}
