import { boxSizes } from '../../constants/globals'
import { CustomCardProps } from '../../models/CardProps'
import latteClassVy from '../../static/images/latte_class_vy.jpg'
import latteClassHenry from '../../static/images/latte_class_henry.jpg'

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
]
