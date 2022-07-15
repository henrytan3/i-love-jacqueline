import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
    height: string,
    backgroundColor: string,
    content: any,
    text: any,
    headerSize: string,
    headerText: string,
}

export const StyledStack = (props: Props) => {
    return (
        <>
            <Box
                h={props.height}
                bg={props.backgroundColor}>
                <br />
                <Heading size={props.headerSize}>{props.headerText}</Heading>
                <br/>
                <Center>
                    {props.content}
                </Center>
                <Text>{props.text}</Text>
            </Box>
        </>
    )
}