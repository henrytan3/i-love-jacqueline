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
    Text,
    useDisclosure,
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';

const Home = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onToggle = () => {
        onOpen();
        if (drawerIsOpen) {
            setDrawerIsOpen(false);
        }
        else {
            setDrawerIsOpen(true);
        }
    }

    return (
        <>
            <Box
                position='fixed'
                zIndex={1}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: 1 }}
                    display={{ base: 'flex' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            drawerIsOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
            </Box>
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
                            <Button>2022</Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}

export default Home;