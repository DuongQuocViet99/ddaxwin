import * as C from "@chakra-ui/react"
import { IconSearch } from "@tabler/icons"

export const InputSearch = props =>
  <C.InputGroup size='sm'>
    <C.InputLeftElement
      pointerEvents='none'
      color='adobe.brown.2'
      children={ <IconSearch size='18px' /> }
    />
    <C.Input
      type='text'
      rounded='sm'
      fontWeight='500'
      color='adobe.gray.1'
      fontFamily='Quicksand'
      focusBorderColor='none'
      borderColor='adobe.gray.3'
      placeholder='Tìm kiếm nhóm...'
      _placeholder={{ color: 'adobe.gray.2' }}
      _hover={{ borderColor: 'adobe.brown.2' }} 
      _focus={{ borderColor: 'adobe.brown.2' }}
      { ...props }
    />
  </C.InputGroup>