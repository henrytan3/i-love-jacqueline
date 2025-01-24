import React, { useState } from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  SimpleGrid,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { TwentyTwentyTwo } from '../components/twentyTwentyTwo/twentyTwentyTwo'
import TwentyTwentyThree from '../components/twentyTwentyThree/twentyTwentyThree'
import TwentyTwentyFour from '../components/twentyTwentyFour/twentyTwentyFour'

const Home = () => {
  const [selectedYear, setSelectedYear] = useState(2022)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box position="fixed" zIndex={1}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: 1 }}
          mt={{ base: 1 }}
          display={{ base: 'flex' }}
        >
          <IconButton
            onClick={onOpen}
            backgroundColor="white"
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Box>
      <VStack spacing={0} align="stretch">
        {selectedYear === 2022 && <TwentyTwentyTwo />}
        {selectedYear === 2023 && <TwentyTwentyThree />}
        {selectedYear === 2024 && <TwentyTwentyFour />}
      </VStack>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Year</DrawerHeader>
            <DrawerBody>
              <SimpleGrid columns={3} spacing={2}>
                <Button onClick={() => setSelectedYear(2022)}>2022</Button>
                <Button onClick={() => setSelectedYear(2023)}>2023</Button>
                <Button onClick={() => setSelectedYear(2024)}>2024</Button>
              </SimpleGrid>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Home
