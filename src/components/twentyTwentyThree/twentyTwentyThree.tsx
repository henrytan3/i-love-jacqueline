import { Box, Image, SimpleGrid, } from "@chakra-ui/react";
import { StyledStack } from "../shared/styledStack"
import birthday from '../../static/images/birthday.jpg';
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
import brightLights from '../../static/images/bright_lights.JPG'
import cuonAndCheesecake from '../../static/images/cuon_and_cheesecake.JPG'
import vyBirthday from '../../static/images/vy_birthday_2023.JPG'
import faceMask from '../../static/images/face_mask.JPG'
import React from "react";

const loadingGIFs = [pompomCookie]

const TwentyTwentyThree = () => {
    const stackSizeSm = [
        '53em',
        '56em',
    ];
    const boxSizes = [
        'xs',
        'sm',
    ];

    return <>
        <StyledStack
            height={stackSizeSm}
            backgroundColor="green.200"
            headerSize='4xl'
            headerText='My birthday 3/4'
            content={
                <Box
                    boxSize={boxSizes}
                    mb='10em'>
                    <Image
                        loading="lazy"
                        fallbackSrc={pompomCookie}
                        src={birthday}
                    />
                </Box>
            }
            text={<>
                When I turned 28! Omg such an old man! 👨🏻‍🦳 <br />
                Thank you for spoiling me on birthday baby! <br />
                I'm really happy to celebrate it with you! <br />
                I love you so much! 😘❤️
            </>}
        ></StyledStack>
        <StyledStack
            height={{ base: '135em', lg: '80em' }}
            backgroundColor="purple.200"
            headerSize='4xl'
            headerText='Home-okase 3/10'
            content={
                <SimpleGrid columns={{ base: 1, sm: 1, lg: 2 }} gap={4}>
                    <Box
                        boxSize={boxSizes} mb='8em'>
                        <Image
                            loading="lazy"
                            src={homeokase1}
                        />
                    </Box>
                    <Box boxSize={boxSizes} mb='8em'><Image src={homeokase2} /></Box>
                    <Box boxSize={boxSizes} mb='8em'><Image src={homeokase3} /></Box>
                    <Box boxSize={boxSizes} mb='8em'><Image src={homeokase4} /></Box>
                </SimpleGrid>
            }
            text={<>
                Our first home-okase! 😋 <br />
                This was sooo much fun and was so yummy! ☺️ <br />
                You made such beautiful sushi baby! 🤤
                <Image boxSize="75px" src={frenchCroissant} style={{ transform: 'translate(10%, -20%)' }} />
            </>}
        ></StyledStack>
        <StyledStack
            height={stackSizeSm}
            backgroundColor="blue.200"
            headerSize='4xl'
            headerText='Upstairs Circus 4/15'
            content={
                <Box
                    boxSize={boxSizes}
                    mb='10em'>
                    <Image
                        loading="lazy"
                        src={upstairsCircus}
                    />
                </Box>
            }
            text={<>
                When we went to Upstairs Circus baby! 😘<br />
                You're so artistic baby! I love your Denver city skyline<br />
                I'm so lucky to be with someone so talented!!! 🥰
            </>}
        ></StyledStack>
        <StyledStack
            height={stackSizeSm}
            backgroundColor="orange.200"
            headerSize='4xl'
            headerText='Studio Ghibli Candlelight Concert 4/21'
            content={
                <Box
                    boxSize={boxSizes}
                    mb='10em'>
                    <Image
                        loading="lazy"
                        src={ghibliConcert}
                    />
                </Box>
            }
            text={<>
                When we went to the Studio Ghibli Concert baby!!!🎶🎵 <br />
                We got to listen to all our favorites from <br />
                Kiki's Delivery Service to Howl's Moving Castle <br />
                This night was so amazing and magical!
            </>}
        ></StyledStack>
        <StyledStack
            height='85em'
            backgroundColor="yellow.200"
            headerSize='4xl'
            headerText='One year anniversary 5/7'
            content={
                <SimpleGrid columns={{ base: 1, sm: 1, lg: 2 }} gap={4}>
                    <Box boxSize={boxSizes} mb='8em'><Image src={oneYearDinner} /></Box>
                    <Box boxSize={boxSizes} mb='8em'><Image src={oneYearFlowers} /></Box>
                </SimpleGrid>
            }
            text={<>
                Our one year anniversary!!! 🥳🥰<br />
                I didn't get any pictures of us, but that's ok there's more to come! <br />
                I can't believe you've been dealing with me for a whole year! <br />
                You mean the world to me! You're the love of my life! <br />
                I wouldn't have it any other way baby! <br />
                I love you so much!
            </>}
        ></StyledStack>
        <StyledStack
            height='80em'
            backgroundColor="pink.200"
            headerSize='4xl'
            headerText='ILLENIUM 6/24'
            content={
                <SimpleGrid columns={{ base: 1, sm: 1, lg: 2 }} gap={4}>
                    <Box boxSize={boxSizes} mb='8em'><Image loading="lazy" src={illenium1} /></Box>
                    <Box boxSize={boxSizes} mb='8em'><Image loading="lazy" src={illenium2} /></Box>
                </SimpleGrid>
            }
            text={<>
                WHEN WE WENT TO ILLENIUM TOGETHER!!! 🥰😘 <br />
                Omg this show was so good!!! <br />
                From the music to the drone show!<br />
                It was so beautiful but nothing is as beautiful as you!! 😘
            </>}
        ></StyledStack>
        <StyledStack
            height='75em'
            backgroundColor="purple.200"
            headerSize='4xl'
            headerText='Putt Shack 7/3'
            content={
                <SimpleGrid columns={{ base: 1, sm: 1, lg: 2 }} gap={4}>
                    <Box boxSize={boxSizes} mb='8em'><Image loading="lazy" src={puttShack1} /></Box>
                    <Box boxSize={boxSizes} mb='8em'><Image loading="lazy" src={puttShack2} /></Box>
                </SimpleGrid>
            }
            text={<>
                When we went to Putt Shack!! 🏌🏻‍♀️🏌🏻<br />
                You beat me so hard!!! 😡 <br />
                You're up now 2-1 in mini golf but I'll get you next time baby!!! 😝 <br />
            </>}
        ></StyledStack>
        <StyledStack
            height={stackSizeSm}
            backgroundColor="green.200"
            headerSize='4xl'
            headerText='Art Museum 8/4'
            content={
                <Box
                    boxSize={boxSizes}
                    mb='2em'>
                    <Image
                        loading="lazy"
                        src={artMuseum}
                    />
                </Box>
            }
            text={<>
                Our A date!!! <br />
                A wonderful start to our alphabet date series 🥰<br />
                Out of all the art work, you were the most beautiful masterpiece baby! 😍

            </>}
        ></StyledStack>
        <StyledStack
            height={stackSizeSm}
            backgroundColor="blue.200"
            headerSize='4xl'
            headerText='Bright Lights 8/11'
            content={
                <Box
                    boxSize={boxSizes}
                    mb='10em'>
                    <Image
                        loading="lazy"
                        src={brightLights}
                    />
                </Box>
            }
            text={<>
                Our B date!!! <br />
                The lights were shining so cute and bright that night ✨<br />
                But you shine brighter than all of them baby! 😍

            </>}
        ></StyledStack>
        <StyledStack
            height={'55em'}
            backgroundColor="yellow.200"
            headerSize='4xl'
            headerText='Cuon and Cheesecake 8/15'
            content={
                <Box
                    boxSize={boxSizes}
                    mb='10em'>
                    <Image
                        loading="lazy"
                        src={cuonAndCheesecake}
                    />
                </Box>
            }
            text={<>
                Our C date!!! <br />
                Thank you for showing me how to make cuon baby it's so yummy! 😋<br />
                I didn't get a picture of the cuon but my cuon rolling skills are getting better! <br />
                The cheesecake was really yummy too! 🤤
            </>}
        ></StyledStack>
        <StyledStack
            height={'55em'}
            backgroundColor="purple.200"
            headerSize='4xl'
            headerText='Your birthday! 9/1 (9/5)'
            content={
                <Box
                    boxSize={boxSizes}
                    mb='10em'>
                    <Image
                        loading="lazy"
                        src={vyBirthday}
                    />
                </Box>
            }
            text={<>
                Your 26th birthday!!! 🎉🥳<br />
                26 never looked better!!!<br />
                You are honestly the most loving, kind, and beautiful girl in the world! <br />
                One day to celebrate you is not enough! <br />
                You are my universe I love you so much
            </>}
        ></StyledStack>
        <StyledStack
            height={stackSizeSm}
            backgroundColor="teal.200"
            headerSize='4xl'
            headerText='I love you!!!'
            content={
                <Box
                    boxSize={boxSizes}
                    mb='10em'>
                    <Image
                        loading="lazy"
                        src={faceMask}
                    />
                </Box>
            }
            text={<>
                I know we have our ups and downs, <br />
                but I would do this a billion times <br />
                just to be with you <br />
                My eyes only see you <br />
                My arms only reach out for you <br />
                My heart is only for you
            </>}
        ></StyledStack>
    </>
}

export default TwentyTwentyThree