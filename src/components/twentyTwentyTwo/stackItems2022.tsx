import { Image, Box } from '@chakra-ui/react'
import { StyledStackProps } from '../../models/StyledStackProps'
import { boxSizes } from '../../constants/globals'
import jacquelineWithHugsy from '../../static/images/jacqueline_with_hugsy.jpg'
import pompomCheeks from '../../static/videos/pompom_cheeks.gif'
import chickenFight from '../../static/images/chicken_fight.jpg'
import topTaco from '../../static/videos/top_taco.mp4'
import painting from '../../static/images/painting.jpg'
import friendsExperience from '../../static/images/friendsExperience.jpg'
import friendsExperience2 from '../../static/images/friendsExperience2.jpg'
import sunflowerFields from '../../static/images/sunflower_fields.jpg'
import jacquelineHighschool from '../../static/images/jacqueline_highschool.jpg'
import henryHighschool from '../../static/images/henry_highschool.jpg'
import odesza from '../../static/images/odesza.jpg'
import pumpkinPatch from '../../static/images/pumpkin_patch.jpg'
import pixarPutt from '../../static/images/pixar_putt.jpg'
import gingerBreadHouses from '../../static/images/gingerbread_houses.jpg'

export const stackItems2022: StyledStackProps[] = [
  {
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
  {
    headerSize: '3xl',
    headerText: 'Chicken Fight! 5/26',
    content: {
      boxSize: boxSizes,
      mb: '16em',
      images: [chickenFight],
    },
    text: (
      <>
        The night we went to Chicken Fight! We ate soooo much chicken that night
        and we even got on the mind eraser! <br />
        You looked so pretty that night and you wore the necklace I got you!{' '}
        <br />
        Thanks for taking me to Chicken Fight! <br />
        How lucky am I to be with you? ❤️
      </>
    ),
  },
  {
    headerSize: '3xl',
    headerText: 'Zoo and Paint! 6/20',
    content: {
      boxSize: boxSizes,
      mb: '0em',
      images: [painting],
    },
    text: (
      <>
        Zoo day!! I didn't get any pictures of us at the zoo but we saw so many
        cute animals like the baby orangutan! <br />
        Afterwards we went to the park to paint, I had so much fun that day! You
        can choose the Bob Ross video next time! <br />
        Every day with you is so amazing! ❤️
      </>
    ),
  },
]
