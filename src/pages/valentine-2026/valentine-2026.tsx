import { Flex, Image } from '@chakra-ui/react'
import Valentine2026Pic from '../../static/images/valentines2026.png'
import { MillionaireButton } from '../../components/millionaire-button/millionaire-button'
import { useNavigate } from 'react-router-dom'

const Valentine2026 = () => {
  const navigate = useNavigate()
  const handleYes = () => {
    navigate('/i-love-jacqueline/valentine/success')
  }
  return (
    <Flex direction="column" height="100vh" bg="black.200" position="relative">
      <Image src={Valentine2026Pic} />
      <Flex>
        <MillionaireButton margin={2} onClick={handleYes}>
          A. Yes
        </MillionaireButton>
        <MillionaireButton margin={2} onClick={handleYes}>
          B. A
        </MillionaireButton>
      </Flex>
      <Flex>
        <MillionaireButton margin={2} onClick={handleYes}>
          C. B
        </MillionaireButton>
        <MillionaireButton margin={2} onClick={handleYes}>
          D. C
        </MillionaireButton>
      </Flex>
    </Flex>
  )
}

export default Valentine2026
