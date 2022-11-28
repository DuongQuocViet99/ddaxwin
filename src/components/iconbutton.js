import { IconButton } from "@chakra-ui/react"

export const IconButtonUnstyled = props => 
  <IconButton
    size='sm'
    bg='none'
    color='adobe.brown.2'
    _active _hover
    { ...props }
  />