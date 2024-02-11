import { Image } from '@chakra-ui/react'
import { CardProps } from '../../models/CardProps'
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

export const cardData2022: CardProps[] = [
  {
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
    headerText: 'Chicken Fight! 5/26',
    content: {
      boxSize: boxSizes,
      mb: '20em',
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
  {
    headerText: 'Top Taco 6/23',
    content: {
      boxSize: boxSizes,
      mb: '0em',
      images: [topTaco],
    },
    text: (
      <>
        The night we went to Taco Fest! You know I love tacos! My mexican name
        is actually Enrique. 😂 <br />
        We ate so many yummy tacos that night!! Thank you for taking me to Top
        Taco! <br />
        It's so crazy I get to call you my girlfriend! 🥰
      </>
    ),
  },
  {
    headerText: 'Friends Experience 7/2',
    content: {
      boxSize: boxSizes,
      mb: '0em',
      images: [friendsExperience, friendsExperience2],
    },
    text: (
      <>
        The day we went to the Friends Experience! We got to live out being on
        the set of Friends, your favorite show! <br />
        I started watching Friends because of you and I loved it! <br />
        You looked so pretty and I felt so special walking through the set with
        you! <br />I love you more and more everyday baby! 🥰
      </>
    ),
  },
  {
    headerText: 'Sunflower Fields 8/13',
    content: {
      boxSize: boxSizes,
      mb: '12em',
      images: [sunflowerFields],
    },
    text: (
      <>
        My beautiful sunflower in a field of sunflowers!! 🌻 <br />
        Our sunflowers turned out so pretty! <br />
        Just like you my love! 😍 <br />I had sooo much fun with you that day! I
        love you! ❤️
      </>
    ),
  },
  {
    headerText: 'ODESZA 9/17',
    content: {
      boxSize: boxSizes,
      mb: '10em',
      images: [odesza],
    },
    text: (
      <>
        ODESZA!!! <br />
        This was one of the best shows I've ever seen!!
        <br />
        And it was even better with you baby!! 😘
        <br />
        You are the one I need I love you!
      </>
    ),
  },
  {
    headerText: 'Pumpkin Patch 10/8',
    content: {
      boxSize: boxSizes,
      mb: '10em',
      images: [pumpkinPatch],
    },
    text: (
      <>
        We went to look for cute pumpkins,
        <br />
        but I already have the cutest pumpkin in the world!!
        <br />
        I love you pumpkin!!! 🎃🧡😘
        <br />
      </>
    ),
  },
  {
    headerText: 'Pixar Putt 10/15',
    content: {
      boxSize: boxSizes,
      mb: '10em',
      images: [pixarPutt],
    },
    text: (
      <>
        Mini golf!! With our favorite pixar movies!! 😊
        <br />
        You won this time baby! I'll get you next time 😡
        <br />
        We're 1-1 in mini golf now honey! 😘
        <br />I have such a talented girlfriend! 🥰
      </>
    ),
  },
  {
    headerText: 'Gingerbread Houses 12/16',
    content: {
      boxSize: boxSizes,
      mb: '4em',
      images: [gingerBreadHouses],
    },
    text: (
      <>
        Gingerbread houses!! Woo!! 🎄
        <br />
        The frosting in the kits weren't that great, but
        <br />
        you still did such a good job honey! 😊
        <br />
        You're so good at ginger bread houses baby! 😘
      </>
    ),
  },
  {
    headerText: 'I love you!',
    content: {
      boxSize: boxSizes,
      mb: '4em',
      images: [jacquelineHighschool, henryHighschool],
    },
    text: '',
  },
]
