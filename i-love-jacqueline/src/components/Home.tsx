import React, { useState } from "react";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    useDisclosure,
    VStack
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';
import { TwentyTwentyTwo } from "./twentyTwentyTwo/twentyTwentyTwo";
import TwentyTwentyThree from "./twentyTwentyThree/twentyTwentyThree";

const Home = () => {
    const [selectedYear, setSelectedYear] = useState(2022);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                position='fixed'
                zIndex={1}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: 1 }}
                    mt={{ base: 1 }}
                    display={{ base: 'flex' }}>
                    <IconButton
                        onClick={onOpen}
                        backgroundColor='white'
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
            </Box>
            <VStack spacing={0}
                align='stretch'>
                {selectedYear === 2022 && <TwentyTwentyTwo />}
                {selectedYear === 2023 && <TwentyTwentyThree />}
            </VStack>
            <Drawer
                placement='right'
                onClose={onClose}
                isOpen={isOpen}
                size='xs'>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth='1px'>
                            Year
                        </DrawerHeader>
                        <DrawerBody>
                            <Button onClick={() => setSelectedYear(2022)}>2022</Button>
                            <Button onClick={() => setSelectedYear(2023)}>2023</Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}

export default Home;