import { useState, useEffect } from 'react'
import { Flex, Box, Image, Text, Checkbox } from '@chakra-ui/react'
import pompomAndMacaroon from '../../static/images/pompom_and_macaroon.jpg'
import { useNavigate } from 'react-router-dom'

const Valentine = () => {
  const elementSize = { width: 400, height: 300 }
  const [position, setPosition] = useState({ top: '50%', left: '50%' })
  const [noCheckBoxState, setNoCheckBoxState] = useState(false)
  const navigate = useNavigate()

  const randomizePosition = () => {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const maxTop = viewportHeight - elementSize.height
    const maxLeft = viewportWidth - elementSize.width

    const randomTop = Math.random() * maxTop
    const randomLeft = Math.random() * maxLeft

    setPosition({
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
    })
  }

  const handleYes = () => {
    navigate('/i-love-jacqueline/valentine/success')
  }

  const handleNo = () => {
    randomizePosition()
    setNoCheckBoxState(false)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setPosition({
      top: `calc(50% - ${elementSize.height / 2}px)`,
      left: `calc(50% - ${elementSize.width / 2}px)`,
    })
  }, [])

  return (
    <Flex direction="column" height="100vh" bg="pink.200" position="relative">
      <Flex
        id="main-content"
        position="absolute"
        top={position.top}
        left={position.left}
        flexDirection="column"
        justifyContent="center"
      >
        <Flex justifyContent="center">
          <Box height={200} width={400}>
            <Image src={pompomAndMacaroon} />
          </Box>
        </Flex>
        <Text fontSize="48" textAlign="center">
          Will you be my Valentine?
        </Text>
        <Flex direction="row" margin="auto" justify="space-between">
          <Checkbox marginEnd="4" onChange={handleYes}>
            Yes
          </Checkbox>
          <Checkbox isChecked={noCheckBoxState} onChange={handleNo}>
            No
          </Checkbox>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Valentine
