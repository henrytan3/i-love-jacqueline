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
import pompomCookie from '../../static/videos/pompom_cookie.gif'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import { cardData2022 } from './cardData2022'
import { CustomCardProps } from '../../models/CardProps'
import pompomBg2022 from '../../static/images/pompom_bg_2022.png'

export const TwentyTwentyTwo = () => {
  const [arrayIndex, setArrayIndex] = useState(0)
  const [items, setItems] = useState<CustomCardProps[]>([
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
        scrollThreshold={'200px'}
        hasMore={items.length != cardData2022.length}
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
  )
}
