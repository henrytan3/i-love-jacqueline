import {
    Image,
    Box,
    VStack,
    HStack,
    Flex,
} from "@chakra-ui/react"
import { StyledStack } from "../shared/styledStack"
import chickenFight from '../../static/images/chicken_fight.jpg';
import jacquelineWithHugsy from '../../static/images/jacqueline_with_hugsy.jpg';
import topTaco from '../../static/videos/top_taco.mp4';
import painting from '../../static/images/painting.jpg';
import friendsExperience from '../../static/images/friendsExperience.jpg';
import friendsExperience2 from '../../static/images/friendsExperience2.jpg';
import jacquelineHighschool from '../../static/images/jacqueline_highschool.jpg';
import henryHighschool from '../../static/images/henry_highschool.jpg'

export const TwentyTwentyTwo = () => {
    return (
        <>

            <StyledStack
                height="56em"
                backgroundColor="purple.200"
                headerSize='4xl'
                headerText='Dear Jacqueline'
                content={
                    <Box
                        boxSize='sm'
                        mb='13em'>
                        <Image
                            src={jacquelineWithHugsy}
                        />
                    </Box>
                }
                text={<>This web diary is dedicated to my beautiful, funny, sweet, and kind girlfriend Jacqueline. <br />
                    I decided to make this to showcase some of memories together with some cute messages. <br />
                    I hope you like it! I love you forever! ❤️ 😘
                </>}
            ></StyledStack>
            <StyledStack
                height="56em"
                backgroundColor="green.200"
                content={
                    <Image src={chickenFight} />
                }
                headerSize='3xl'
                headerText='Chicken Fight! 5/26'
                text={<>
                    The night we went to Chicken Fight! We ate soooo much chicken that night and we even got on the mind eraser! <br />
                    You looked so pretty that night and you wore the necklace I got you! <br />
                    Thanks for taking me to Chicken Fight! <br />
                    How lucky am I to be with you? ❤️
                </>}
            ></StyledStack>
            <StyledStack
                height="56em"
                backgroundColor="blue.200"
                content={
                    <Box
                        boxSize='md'>
                        <Image src={painting} />
                    </Box>}
                headerSize='3xl'
                headerText='Zoo and Paint 6/20'
                text={<>
                    Zoo day!! I didn't get any pictures of us at the zoo but we saw so many cute animals like the baby orangutan! <br />
                    Afterwards we went to the park to paint, I had so much fun that day! You can choose the Bob Ross video next time! <br />
                    Every day with you is so amazing! ❤️
                </>}></StyledStack>
            <StyledStack height="56em"
                backgroundColor="yellow.200"
                content={<video
                    width='500px'
                    height='400px'
                    controls
                    autoPlay
                    src={topTaco}>
                </video>}
                headerSize='3xl'
                headerText='Top Taco 6/23'
                text={<>
                    The night we went to Taco Fest! You know I love tacos! My mexican name is actually Enrique. 😂 <br />
                    We ate so many yummy tacos that night!! Thank you for taking me to Top Taco! <br />
                    It's so crazy I get to call you my girlfriend! 🥰
                </>}></StyledStack>
            <StyledStack height="72em"
                backgroundColor="red.200"
                content={<>
                    <VStack>
                        <Box boxSize='sm'>
                            <Image src={friendsExperience} />
                        </Box>
                        <Box boxSize='sm'>
                            <Image src={friendsExperience2} />
                        </Box>
                    </VStack>
                </>}
                headerSize='3xl'
                headerText='Friends Experience 7/2'
                text={<>
                    The day we went to the Friends Experience! We got to live out being on the set of Friends, your favorite show! <br />
                    I started watching Friends because of you and I loved it! <br />
                    You looked so pretty and I felt so special walking through the set with you! <br />
                    I love you more and more everyday baby! 🥰
                </>}></StyledStack>
            <StyledStack
                height="63em"
                backgroundColor="teal.200"
                content={
                    <VStack>
                        <Box boxSize='sm'>
                            <Image src={jacquelineHighschool} />
                        </Box>
                        <Box boxSize='sm'>
                            <Image src={henryHighschool} />
                        </Box>
                    </VStack>
                }
                headerSize='3xl'
                headerText="I love you!"
                text={<></>}
            ></StyledStack>
        </>
    )
}