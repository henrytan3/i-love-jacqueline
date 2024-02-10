import { Image, Box } from '@chakra-ui/react'
import { StyledStackProps } from '../../models/StyledStackProps'
import { boxSizes } from '../../constants/globals'
import jacquelineWithHugsy from '../../static/images/jacqueline_with_hugsy.jpg'
import pompomCheeks from '../../static/videos/pompom_cheeks.gif'

export const stackItems2022: StyledStackProps[] = [
  {
    height: '55em',
    backgroundColor: 'purple.200',
    headerSize: '4xl',
    headerText: 'Dear Jacqueline',
    content: {
      boxSize: boxSizes,
      mb: '13em',
      images: [jacquelineWithHugsy],
    },
    text: (
      <>
        This web diary is dedicated to my beautiful, funny, sweet, and kind
        girlfriend Jacqueline. <br />
        I decided to make this to showcase some of our memories together with
        some cute messages. <br />I hope you like it! I love you forever! ❤️ 😘
        <Image
          boxSize="100px"
          style={{ transform: 'translate(10%, -20%)' }}
          src={pompomCheeks}
        />
      </>
    ),
  },
]
