import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { useRouteError } from "react-router-dom"
import { IconFishBone } from "@tabler/icons"

export default function ErrorPage() {
  const error = useRouteError()
  
  return (
    <>
      <Flex 
        minH='100vh'
        align='center'
        justify='center'
      >
        <VStack
          p={ 8 }
          rounded='xl'
          boxShadow='base'
        >
          <HStack>
            <Heading
              as='h1'
              size='md'
              color='#595959'
              fontWeight='600'
              fontFamily='Quicksand'
            >
              { error.statusText || error.message }
            </Heading>
            <IconFishBone size='42px' color='#BFBFBF' />
          </HStack>
            <Text
              color='#737373'
              fontWeight='500'
              fontFamily='Quicksand' 
            >
              Ôi không...có gì đó không đúng !
            </Text>
        </VStack>
      </Flex>
    </>
  )
}