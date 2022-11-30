import * as C from '@chakra-ui/react'
import * as TB from '@tabler/icons'
import * as Cus from 'components/common'

export default function DrawerBase() {
  const { isOpen, onOpen, onClose } = C.useDisclosure()

  return (
    <>
      <Cus.IconButtonUnstyled
        onClick={ onOpen }
        icon={ <TB.IconMenu2 size='20px' /> } 
      />
      <C.Drawer
        placement='left'
        isOpen={ isOpen }
        onClose={ onClose }
      >
        <C.DrawerOverlay bg='rgba(166, 161, 161, 0.6)' />
        <C.DrawerContent
          maxW='2xs' 
          h='min'
          ml={ 8 } 
          mt={ 16 }
          rounded='sm'
        >
          <C.DrawerHeader>
            <Cus.InputSearch />
          </C.DrawerHeader>
          <C.DrawerBody>
            <C.Alert
              rounded='md'
              color='white'
              bg='adobe.pink.1'
            >
              <C.HStack spacing={ 3 }>
                <TB.IconBan size='26px' />
                <C.AlertTitle
                  fontSize='sm'
                  fontWeight='600'
                  fontFamily='Quicksand' 
                >
                  Bạn chưa tham gia nhóm nào !
                </C.AlertTitle>
              </C.HStack>
            </C.Alert>
          </C.DrawerBody>
          <C.DrawerFooter display='block'>
            <C.Text
              mb={ 2 }
              fontSize='sm'
              fontWeight='600'
              color='adobe.gray.1'
              fontFamily='Quicksand'
            >
              Nhóm gợi ý:
            </C.Text>
            <Cus.DrawerGroupItem />
          </C.DrawerFooter>
        </C.DrawerContent>
      </C.Drawer>
    </>
  )
}