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
} from '@chakra-ui/react'
import { StyledStack } from '../shared/styledStack'
import chickenFight from '../../static/images/chicken_fight.jpg'
import jacquelineWithHugsy from '../../static/images/jacqueline_with_hugsy.jpg'
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
import pompomCheeks from '../../static/videos/pompom_cheeks.gif'
import pompomCookie from '../../static/videos/pompom_cookie.gif'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import { cardData2022 } from './cardData2022'
import { CardProps } from '../../models/CardProps'
import pompomBg2022 from '../../static/images/pompom_bg_2022.png'

export const TwentyTwentyTwo = () => {
  const [arrayIndex, setArrayIndex] = useState(0)
  const [items, setItems] = useState<CardProps[]>([
    cardData2022[arrayIndex],
    cardData2022[arrayIndex + 1],
  ])

  const handleScroll = () => {
    items.push(cardData2022[items.length])
    setItems(items)
    setArrayIndex(items.length - 1)
  }

  return (
    <Center backgroundImage={pompomBg2022}>
      <InfiniteScroll
        dataLength={items.length}
        hasMore={items.length != cardData2022.length}
        loader={<img src={pompomCookie} alt="Loading..."></img>}
        next={handleScroll}
      >
        {items.map((item, index) => {
          return (
            <Card
              mt="3em"
              mb="3em"
              maxW="lg"
              justify={'center'}
              key={`card-2022-${index}`}
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
    //   <StyledStack
    //     height="56em"
    //     backgroundColor="purple.400"
    //     content={
    //       <>
    //         <Box boxSize="md" mb="10em">
    //           <Image loading="lazy" src={pixarPutt} />
    //         </Box>
    //       </>
    //     }
    //     headerSize="3xl"
    //     headerText="Pixar Putt 10/15"
    //     text={
    //       <>
    //         Mini golf!! With our favorite pixar movies!! 😊
    //         <br />
    //         You won this time baby! I'll get you next time 😡
    //         <br />
    //         We're 1-1 in mini golf now honey! 😘
    //         <br />I have such a talented girlfriend! 🥰
    //       </>
    //     }
    //   ></StyledStack>
    //   <StyledStack
    //     height="56em"
    //     backgroundColor="green.400"
    //     content={
    //       <>
    //         <Box boxSize="md">
    //           <Image loading="lazy" src={gingerBreadHouses} />
    //         </Box>
    //       </>
    //     }
    //     headerSize="3xl"
    //     headerText="Gingerbread Houses 12/16"
    //     text={
    //       <>
    //         Gingerbread houses!! Woo!! 🎄
    //         <br />
    //         The frosting in the kits weren't that great, but
    //         <br />
    //         you still did such a good job honey! 😊
    //         <br />
    //         You're so good at ginger bread houses baby! 😘
    //       </>
    //     }
    //   ></StyledStack>
    //   <StyledStack
    //     height="58em"
    //     backgroundColor="teal.200"
    //     content={
    //       <VStack>
    //         <Box boxSize="sm">
    //           <Image loading="lazy" src={jacquelineHighschool} />
    //         </Box>
    //         <Box boxSize="sm">
    //           <Image loading="lazy" src={henryHighschool} />
    //         </Box>
    //       </VStack>
    //     }
    //     headerSize="3xl"
    //     headerText="I love you!"
    //     text={<></>}
    //   ></StyledStack>
  )
}
