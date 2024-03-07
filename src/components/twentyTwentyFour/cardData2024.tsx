import { boxSizes } from '../../constants/globals'
import { CustomCardProps } from '../../models/CardProps'
import latteClassVy from '../../static/images/latte_class_vy.jpg'
import latteClassHenry from '../../static/images/latte_class_henry.jpg'
import littlemanIceCreamTour from '../../static/images/littlemans_tour.jpeg'
import ukiyo from '../../static/images/ukiyo.jpeg'

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
]
