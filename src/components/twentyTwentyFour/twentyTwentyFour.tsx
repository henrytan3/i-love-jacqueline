import {
    Image,
    Box,
    VStack,
    SimpleGrid
} from "@chakra-ui/react"
import { StyledStack } from "../shared/styledStack"
import latteClassVy from "../../static/images/latte_class_vy.jpg"
import latteClassHenry from "../../static/images/latte_class_henry.jpg"
import React from "react";

export const TwentyTwentyFour = () => {
    const stackSizeSm = [
        '55em',
        '56em',
    ];
    const boxSizes = [
        'xs',
        'sm',
    ];

    return (
        <>
            <StyledStack
                height='75em'
                backgroundColor="blue.200"
                headerSize='4xl'
                headerText='Espresso Latte Art 1/6'
                content={
                    <SimpleGrid columns={{ base: 1, sm: 1, lg: 1 }} gap={4}>
                        <Box style={{ marginBottom: '0px' }} boxSize={boxSizes} mb='8em'><Image loading="lazy" src={latteClassVy} /></Box>
                        <Box boxSize={boxSizes} mb='8em'><Image loading="lazy" src={latteClassHenry} /></Box>
                    </SimpleGrid>
                }
                text={<>
                    Our E date!!!<br />
                When we went to the latte art class!!! ☕️<br />
                This was out of order but we had to do this class!<br />
                Your latte art is so good baby!<br />
                Time to get an espresso machine and practice hahah 😂
            </>}
            ></StyledStack>
        </>
    )
}