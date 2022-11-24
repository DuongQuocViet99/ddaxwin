import { Divider } from "@chakra-ui/react"

export const DividerVertical = props =>
  <Divider
    rounded='full'
    orientation='vertical'
    borderColor='rgba(136, 137, 140, 0.7)'
    { ...props }
  />