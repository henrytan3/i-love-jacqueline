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
import { cardData2024 } from './cardData2024'
import { useState } from 'react'
import { CustomCardProps } from '../../models/CardProps'
import pompomBg2024 from '../../static/images/pompomwallpaper_2024.jpg'

const TwentyTwentyFour = () => {
  const [arrayIndex, setArrayIndex] = useState(0)
  const [items, setItems] = useState<CustomCardProps[]>([
    cardData2024[arrayIndex],
  ])

  const handleScroll = () => {
    items.push(cardData2024[items.length])
    setItems(items)
    setArrayIndex(items.length - 1)
  }

  return (
    <Center backgroundImage={pompomBg2024}>
      <InfiniteScroll
        dataLength={items.length}
        scrollThreshold={'200px'}
        hasMore={items.length !== cardData2024.length}
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
              key={`card-2024-${index}`}
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

export default TwentyTwentyFour
