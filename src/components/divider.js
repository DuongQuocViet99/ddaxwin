import { Divider } from "@chakra-ui/react"

export const DividerVerticalDark = props =>
  <Divider
    rounded='full'
    orientation='vertical'
    borderColor='adobe.gray.2'
    { ...props }
  />

export const DividerVerticalLight = props =>
  <Divider
    rounded='full'
    orientation='vertical'
    borderColor='whiteAlpha.600'
    { ...props }
  />

export const DividerHorizontalLight = props =>
  <Divider
    rounded='full'
    borderColor='whiteAlpha.600'
    { ...props }
  />

export const DividerHorizontalDark = props =>
  <Divider
    rounded='full'
    borderColor='adobe.brown.1'
    { ...props }
  />