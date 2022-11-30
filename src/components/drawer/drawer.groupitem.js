import { Link } from "react-router-dom"
import * as C from "@chakra-ui/react"
import * as TB from "@tabler/icons"
import * as Cus from "components/common"

const lstExploreGroup = [
  { name: 'Royal', url: '/groups/royal', verified: true },
  { name: 'Lol Skill Award', url: '/groups/lolskillaward', verified: true },
  { name: 'Coder kids reward', url: '/groups/coderkidsreward', verified: false }
]

export const DrawerGroupItem = () =>
  <C.List spacing={ 2 }>
    <Cus.Map lst={ lstExploreGroup } render={( i, k ) =>
      <C.ListItem
        key={ k }
        boxShadow='base'
        _hover={{ boxShadow: 'md' }}
      >
        <C.HStack 
          p={ 2 }
          as={ Link } 
          to={ i.url }
        > 
          { i.verified && <TB.IconCircleCheck size='20px' color='#3DD1F2' /> }
          <C.Text
            fontSize='sm'
            fontWeight='500'
            color='adobe.gray.1'
            fontFamily='Quicksand'
          >
            { i.name }
          </C.Text>
          <C.Spacer />
          <C.Text
            fontSize='xs'
            fontWeight='600'
            color='adobe.gray.2'
            fontFamily='Quicksand'
          >
            10k +
          </C.Text>
        </C.HStack>
      </C.ListItem>
    } />
  </C.List>