import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type MillionaireButtonProps = {
  children: ReactNode
} & ButtonProps

export const MillionaireButton = ({
  children,
  ...props
}: MillionaireButtonProps) => (
  <Button
    w="100%"
    h="64px"
    px={8}
    fontSize="lg"
    fontWeight="bold"
    letterSpacing="wide"
    textTransform="uppercase"
    color="white"
    border="2px solid #d4af37" // gold border
    borderRadius="999px"
    bgGradient="linear(to-r, #0b1c3d, #1a3c7c, #0b1c3d)"
    boxShadow="0 0 12px rgba(212, 175, 55, 0.6)"
    _hover={{
      bgGradient: 'linear(to-r, #1a3c7c, #2b6cb0, #1a3c7c)',
      boxShadow: '0 0 18px rgba(212, 175, 55, 0.9)',
      transform: 'scale(1.02)',
    }}
    _active={{
      bgGradient: 'linear(to-r, #d4af37, #f6e27a, #d4af37)',
      color: '#0b1c3d',
      transform: 'scale(0.98)',
    }}
    _focusVisible={{
      boxShadow: '0 0 0 3px rgba(212, 175, 55, 0.8)',
    }}
    transition="all 0.15s ease-in-out"
    {...props}
  >
    {children}
  </Button>
)
