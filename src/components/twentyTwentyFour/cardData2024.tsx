import { boxSizes } from '../../constants/globals'
import { CustomCardProps } from '../../models/CardProps'
import latteClassVy from '../../static/images/latte_class_vy.jpg'
import latteClassHenry from '../../static/images/latte_class_henry.jpg'
import littlemanIceCreamTour from '../../static/images/littlemans_tour.jpeg'
import ukiyo from '../../static/images/ukiyo.jpeg'
import myBirthday2024 from '../../static/images/my_birthday_2024.jpg'
import nuggetsGame from '../../static/images/nuggets_game.jpg'
import twoYearAnniversary from '../../static/images/2year_anniversary.jpg'
import jewelryMaking from '../../static/images/jewelry_making.jpg'
import peoniePicking from '../../static/images/peonie_picking.jpeg'
import horseBackRiding from '../../static/images/horseback_riding.jpeg'

export const cardData2024: CustomCardProps[] = [
  {
    headerText: 'Espresso Latte Art 1/6',
    content: {
      boxSize: boxSizes,
      mb: '13em',
      images: [latteClassVy, latteClassHenry],
    },
    text: (
      <>
        Our E date!!!
        <br />
        When we went to the latte art class!!! ☕️
        <br />
        This was out of order but we had to do this class!
        <br />
        Your latte art is so good baby!
        <br />
        Time to get an espresso machine and practice hahah 😂
      </>
    ),
  },
  {
    headerText: "Littleman's Icecream Tour 2/17",
    content: {
      boxSize: boxSizes,
      mb: '13em',
      images: [littlemanIceCreamTour],
    },
    text: (
      <>
        Our I date!!! <br />
        When we went to the littleman's ice cream factory tour! 🍦 <br />
        The way they make ice cream is so cool and so yummy! <br />
        Next time we're gonna make the ice cream!
      </>
    ),
  },
  {
    headerText: "Valentine's Day 2/17",
    content: {
      boxSize: boxSizes,
      mb: '13em',
      images: [ukiyo],
    },
    text: (
      <>
        Our Valentine's Day Dinner ❤️ <br />
        One of the best omakase's and the best date in the world! 😘 <br />
        Everything was so yummy and the food looked so good! 😋
        <br />I love you so much my forever Valentine! ❤️❤️❤️
      </>
    ),
  },
  {
    headerText: 'My birthday 3/8',
    content: {
      boxSize: boxSizes,
      mb: '13em',
      images: [myBirthday2024],
    },
    text: (
      <>
        My 29th birthday! <br />
        I'm so grateful I get to spend another birthday with you baby! 🥰 <br />
        Many many more to come! ❤️
        <br />I love you so much! ❤️❤️❤️
      </>
    ),
  },
  {
    headerText: 'Nuggets Game 5/6',
    content: {
      boxSize: boxSizes,
      mb: '13em',
      images: [nuggetsGame],
    },
    text: (
      <>
        Nuggets playoff game! <br />
        Thank you for taking me to the nuggets game baby! 🥰 <br />
        Even though the nuggets lost I still won because I'm with you!
      </>
    ),
  },
  {
    headerText: '2 year annivesary 5/7',
    content: {
      boxSize: boxSizes,
      mb: '13em',
      images: [twoYearAnniversary],
    },
    text: (
      <>
        Our two year anniversary!!! 🥳🥰
        <br />
        Thank you for showing me so much love in 2 years baby! <br />
        Thank you for coming into my life and showing me what love is supposed
        to be like <br />I love you
      </>
    ),
  },
  {
    headerText: 'Jewelry Making 5/10',
    content: {
      boxSize: boxSizes,
      mb: '13em',
      images: [jewelryMaking],
    },
    text: (
      <>
        Our J date!! 💍 We made rings that will last forever just like us! ☺️
        This was such a fun experience I will wear my ring forever!! ❤️
      </>
    ),
  },
  {
    headerText: 'Peonie Picking 6/1',
    content: {
      boxSize: boxSizes,
      mb: '13em',
      images: [peoniePicking],
    },
    text: (
      <>
        Peonie and picnic! 🌺🌸 I know peonies are your favorite flower so when
        I saw this I had to take you baby ❤️❤️ You're so talented at arranging
        flowers There is no flower prettier than you though 😍
      </>
    ),
  },
  {
    headerText: 'Horseback Riding 7/19',
    content: {
      boxSize: boxSizes,
      mb: '2em',
      images: [horseBackRiding],
    },
    text: (
      <>
        Our H date! Horseback riding is something we both never done before but
        you were brave and got on a horse! 🐴 Thank you Shaggy and Thor! They
        were good horses! 🐎
      </>
    ),
  },
]
