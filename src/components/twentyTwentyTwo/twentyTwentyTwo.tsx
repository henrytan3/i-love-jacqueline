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
import { stackItems2022 } from './stackItems2022'
import { StyledStackProps } from '../../models/StyledStackProps'

export const TwentyTwentyTwo = () => {
  const [arrayIndex, setArrayIndex] = useState(0)
  const [items, setItems] = useState<StyledStackProps[]>([
    stackItems2022[arrayIndex],
    stackItems2022[arrayIndex + 1],
  ])

  const handleScroll = () => {
    items.push(stackItems2022[items.length])
    setItems(items)
    setArrayIndex(items.length - 1)
  }

  const getItems = () => {
    handleScroll()
  }

  return (
    <Center>
      <InfiniteScroll
        dataLength={2}
        hasMore={true}
        loader={<img src={pompomCookie} alt="Loading..."></img>}
        next={getItems}
      >
        {items.map((item, index) => (
          <Card
            maxW="lg"
            mb="4em"
            justify={'center'}
            key={`card-2022-${index}`}
            variant="filled"
          >
            <CardHeader>
              <Heading size="md">{item.headerText}</Heading>
            </CardHeader>
            <CardBody>
              <VStack>
                {item.content.images.map((image, index) => {
                  return (
                    <Box
                      key={`box-${index}`}
                      boxSize={item.content.boxSize}
                      mb={item.content.mb}
                    >
                      <Image
                        loading="lazy"
                        src={image}
                        key={`image-${index}`}
                      />
                    </Box>
                  )
                })}
              </VStack>
              <Text>{item.text}</Text>
            </CardBody>
          </Card>
        ))}
      </InfiniteScroll>
    </Center>
    //   <StyledStack
    //     height="56em"
    //     backgroundColor="yellow.200"
    //     content={
    //       <Box mb="2em">
    //         <video width="500px" height="400px" controls src={topTaco}></video>
    //       </Box>
    //     }
    //     headerSize="3xl"
    //     headerText="Top Taco 6/23"
    //     text={
    //       <>
    //         The night we went to Taco Fest! You know I love tacos! My mexican
    //         name is actually Enrique. 😂 <br />
    //         We ate so many yummy tacos that night!! Thank you for taking me to
    //         Top Taco! <br />
    //         It's so crazy I get to call you my girlfriend! 🥰
    //       </>
    //     }
    //   ></StyledStack>
    //   <StyledStack
    //     height="72em"
    //     backgroundColor="red.200"
    //     content={
    //       <>
    //         <VStack>
    //           <Box boxSize="sm">
    //             <Image loading="lazy" src={friendsExperience} />
    //           </Box>
    //           <Box boxSize="sm">
    //             <Image loading="lazy" src={friendsExperience2} />
    //           </Box>
    //         </VStack>
    //       </>
    //     }
    //     headerSize="3xl"
    //     headerText="Friends Experience 7/2"
    //     text={
    //       <>
    //         The day we went to the Friends Experience! We got to live out being
    //         on the set of Friends, your favorite show! <br />
    //         I started watching Friends because of you and I loved it! <br />
    //         You looked so pretty and I felt so special walking through the set
    //         with you! <br />I love you more and more everyday baby! 🥰
    //       </>
    //     }
    //   ></StyledStack>
    //   <StyledStack
    //     height="58em"
    //     backgroundColor="orange.200"
    //     content={
    //       <>
    //         <Box boxSize="md" mb={['12em', '14em']}>
    //           <Image src={sunflowerFields} />
    //         </Box>
    //       </>
    //     }
    //     headerSize="3xl"
    //     headerText="Sunflower Fields 8/13"
    //     text={
    //       <>
    //         My beautiful sunflower in a field of sunflowers!! 🌻 <br />
    //         Our sunflowers turned out so pretty! <br />
    //         Just like you my love! 😍 <br />I had sooo much fun with you that
    //         day! I love you! ❤️
    //       </>
    //     }
    //   ></StyledStack>
    //   <StyledStack
    //     height="56em"
    //     backgroundColor="blue.400"
    //     content={
    //       <>
    //         <Box boxSize="md" mb="10em">
    //           <Image loading="lazy" src={odesza} />
    //         </Box>
    //       </>
    //     }
    //     headerSize="3xl"
    //     headerText="ODESZA 9/17"
    //     text={
    //       <>
    //         ODESZA!!! <br />
    //         This was one of the best shows I've ever seen!!
    //         <br />
    //         And it was even better with you baby!! 😘
    //         <br />
    //         You are the one I need I love you!
    //       </>
    //     }
    //   ></StyledStack>
    //   <StyledStack
    //     height="56em"
    //     backgroundColor="yellow.400"
    //     content={
    //       <>
    //         <Box boxSize="md" mb="10em">
    //           <Image src={pumpkinPatch} />
    //         </Box>
    //       </>
    //     }
    //     headerSize="3xl"
    //     headerText="Pumpkin Patch 10/8"
    //     text={
    //       <>
    //         We went to look for cute pumpkins,
    //         <br />
    //         but I already have the cutest pumpkin in the world!!
    //         <br />
    //         I love you pumpkin!!! 🎃🧡😘
    //         <br />
    //       </>
    //     }
    //   ></StyledStack>
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
