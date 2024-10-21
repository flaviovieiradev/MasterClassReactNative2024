import { View, Text } from 'react-native'
import React from 'react'
import Contador from '@/components/Contador'

export default function contador() {
  return (
    <Contador valorInicial={100}/>
  )
}