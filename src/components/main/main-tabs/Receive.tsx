import { Box, Button, Container, Text} from "@chakra-ui/react"
import { keyframes } from "@emotion/react";
import { useState, useContext, useEffect } from 'react';
import { SocketContext } from "@/Context/SocketContext";
import { Socket } from "socket.io-client";

export const Receive = () => {

    const socket: Socket = useContext(SocketContext);

    const fadein = keyframes `
        0%{ width: 50px; height: 50px; opacity: 0; }
        100%{ width: 180px; height: 180px; opacity: 0.5; }
    `
    const outerfade = keyframes `
        0%{ opacity: 1; }
        100%{ opacity: 0; }
    `

    const [ connected, setConnection ] = useState<Boolean | 'pending' | 'error'>(false);

    const emitConn = () => {
        socket.emit('waiting');
    }


    useEffect(() => {
        socket.on('connected', () => setConnection(true))
        return () => {
            socket.off('connected');
        };
    }, [connected])



    return (
        <Container>
            {(!connected || connected == 'error') && <Button bg={"var(--themeColor)"} onClick={() => {
                setConnection('pending');
                emitConn();
            }}>Receive</Button>}
            {connected == 'pending' && 
                <Container px={0} display={'flex'} flexDir={'column'} height={'80vh'}  alignItems={'flex-start'}>
                    <Button onClick={() => setConnection(false)}>Cancel</Button>
                    <Box 
                        borderRadius= {'50%'}
                        w={'50px'}
                        h={'50px'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        bg={'var(--transColor)'}
                        alignSelf={'center'}
                        m={'auto'}
                        animation={`${fadein} 1s alternate infinite`}
                        animationPlayState={connected == 'pending' ? 'running' : 'paused'}
                        zIndex={'1'}
                        _after={{
                            content: '""',
                            w: '180px',
                            h: '180px',
                            borderRadius: '50%',
                            bg: "var(--transColor)",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            animation: `${outerfade} 1s alternate infinite`,
                            animationPlayState: connected == 'pending' ? 'running' : 'paused'
                        }}
                    >
                        Connecting...
                    </Box>
                </Container>
            }
            {
                connected == true && <Text textAlign={'center'} fontSize={'2rem'} color={'lawngreen'}>Connected</Text>
            }

        </Container>
    )
}