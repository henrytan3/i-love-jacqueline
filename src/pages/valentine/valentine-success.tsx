import { Flex, Text, Image } from '@chakra-ui/react'
import pompomHeartGIF from '../../static/images/pompom_heart.gif'

const ValentineSuccess = () => (
  <Flex
    direction="column"
    height="100vh"
    bg="pink.200"
    position="relative"
    flexDirection="column"
    justifyContent="center"
  >
    <Flex justifyContent="center">
      <Image align="end" boxSize="300" src={pompomHeartGIF} />
    </Flex>
    <Flex justifyContent="center">
      <Text fontSize={50}>YAYYYYYY!!!!!!</Text>
    </Flex>
  </Flex>
)

export default ValentineSuccess
