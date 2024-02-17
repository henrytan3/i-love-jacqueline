import {
  Image,
  Box,
  VStack,
  Card,
  Heading,
  CardHeader,
  CardBody,
  Text,
  Center,
  SimpleGrid,
} from '@chakra-ui/react'
import { StyledStack } from '../shared/styledStack'
import birthday from '../../static/images/birthday.jpg'
import homeokase1 from '../../static/images/home_okase_1.jpg'
import homeokase2 from '../../static/images/home_okase_2.jpg'
import homeokase3 from '../../static/images/home_okase_3.jpg'
import homeokase4 from '../../static/images/home_okase_4.jpg'
import upstairsCircus from '../../static/images/upstairs_circus.jpg'
import ghibliConcert from '../../static/images/ghibli_concert.jpg'
import oneYearFlowers from '../../static/images/one_year_flowers.jpg'
import oneYearDinner from '../../static/images/one_year_dinner.jpg'
import illenium1 from '../../static/images/illenium1.jpg'
import illenium2 from '../../static/images/illenium2.jpg'
import puttShack1 from '../../static/images/putt_shack.jpg'
import puttShack2 from '../../static/images/putt_shack2.jpg'
import frenchCroissant from '../../static/images/french_croissant.png'
import pompomCookie from '../../static/videos/pompom_cookie.gif'
import artMuseum from '../../static/images/art_museum.jpg'
import brightLights from '../../static/images/bright_lights.jpg'
import cuonAndCheesecake from '../../static/images/cuon_and_cheesecake.jpg'
import vyBirthday from '../../static/images/vy_birthday_2023.jpg'
import faceMask from '../../static/images/face_mask.jpg'
import museumOfIllusions1 from '../../static/images/museum_of_illiusions_1.jpg'
import museumOfIllusions2 from '../../static/images/museum_of_illusions_2.jpg'
import pumpkinPatch from '../../static/images/pumpkin_patch_2023.jpg'
import pumpkinCarving2023 from '../../static/images/pumpkin_carving_2023.jpg'
import daveAndBusters from '../../static/images/dave_and_busters.jpg'
import buildABear from '../../static/images/build_a_bear.jpg'
import flowerArranging from '../../static/images/flower_arranging.jpg'
import gingerBreadHouses from '../../static/images/ginger_bread_houses_2023.jpg'
import InfiniteScroll from 'react-infinite-scroll-component'
import { cardData2023 } from './cardData2023'
import { useState } from 'react'
import { CustomCardProps } from '../../models/CardProps'
import pompomBg2023 from '../../static/images/pompompurin_bg_2023.jpg'

const TwentyTwentyThree = () => {
  const stackSizeSm = ['53em', '56em']
  const boxSizes = ['xs', 'sm']

  const [arrayIndex, setArrayIndex] = useState(0)
  const [items, setItems] = useState<CustomCardProps[]>([
    cardData2023[arrayIndex],
    cardData2023[arrayIndex + 1],
  ])

  const handleScroll = () => {
    items.push(cardData2023[items.length])
    setItems(items)
    setArrayIndex(items.length - 1)
  }

  return (
    <>
      <Center backgroundImage={pompomBg2023}>
        <InfiniteScroll
          dataLength={items.length}
          scrollThreshold={'200px'}
          hasMore={items.length != cardData2023.length}
          loader={<img src={pompomCookie} alt="Loading..."></img>}
          next={handleScroll}
        >
          {items.map((item, index) => {
            return (
              <Card
                mt="3em"
                mb="3em"
                ml="1em"
                mr="1em"
                maxW="lg"
                justify={'center'}
                key={`card-2023-${index}`}
                variant="filled"
              >
                <CardHeader>
                  <Heading size="lg">{item.headerText}</Heading>
                </CardHeader>
                <CardBody>
                  <VStack>
                    {item.content.images.map((image: any, index) => {
                      const fileExtension = image.split('.').pop()
                      return (
                        <Box
                          key={`box-${index}`}
                          boxSize={item.content.boxSize}
                          mb={item.content.mb}
                        >
                          {(() => {
                            switch (fileExtension) {
                              case 'jpg':
                              case 'png':
                                return (
                                  <Image
                                    loading="lazy"
                                    src={image}
                                    key={`image-${index}`}
                                  />
                                )
                              case 'mp4':
                                return <video src={image} />
                              default:
                                return <div></div>
                            }
                          })()}
                        </Box>
                      )
                    })}
                  </VStack>
                  <Text>{item.text}</Text>
                </CardBody>
              </Card>
            )
          })}
        </InfiniteScroll>
      </Center>
      {/* 
    
      <StyledStack
        height={stackSizeSm}
        backgroundColor="teal.200"
        headerSize="4xl"
        headerText="I love you!!!"
        content={
          <Box boxSize={boxSizes} mb="10em">
            <Image loading="lazy" src={faceMask} />
          </Box>
        }
        text={
          <>
            I know we have our ups and downs, <br />
            but I would do this a billion times <br />
            just to be with you <br />
            My eyes only see you <br />
            My arms only reach out for you <br />
            My heart is only for you
          </>
        }
      ></StyledStack> */}
    </>
  )
}

export default TwentyTwentyThree
