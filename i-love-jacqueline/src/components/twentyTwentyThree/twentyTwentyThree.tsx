import { Box, Center, Grid, GridItem, Image, SimpleGrid, } from "@chakra-ui/react";
import { StyledStack } from "../shared/styledStack"
import birthday from '../../static/images/birthday.jpg';
import homeokase1 from '../../static/images/home_okase_1.jpg'
import homeokase2 from '../../static/images/home_okase_2.jpg'
import homeokase3 from '../../static/images/home_okase_3.jpg'
import homeokase4 from '../../static/images/home_okase_4.jpg'

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
            height={{base: '130em', lg: '80em'}}
            backgroundColor="purple.200"
            headerSize='4xl'
            headerText='Home-okase 3/10'
            content={
                <SimpleGrid columns={{base: 1, sm: 1, lg: 2}} gap={4}>
                    <Box
                            boxSize={boxSizes} mb='8em'>
                            <Image
                                src={homeokase1}
                            />
                        </Box>
                        <Box boxSize={boxSizes} mb='8em'><Image src={homeokase2}/></Box>
                        <Box boxSize={boxSizes} mb='8em'><Image src={homeokase3} /></Box>
                        <Box boxSize={boxSizes} mb='8em'><Image src={homeokase4} /></Box>
                </SimpleGrid>
            }
            text={<>
                Our first home-okase! 😋 <br />
                This was sooo much fun and was so yummy! ☺️ <br />
                You made such beautiful sushi baby! 🤤
            </>}
        ></StyledStack>
    </>
}

export default TwentyTwentyThree