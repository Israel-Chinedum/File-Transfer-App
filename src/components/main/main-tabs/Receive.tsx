import { Box, Button, Container, Text} from "@chakra-ui/react"
import { useState, useContext, useEffect } from 'react';
import { SocketContext } from "@/Context/SocketContext";
import { Socket } from "socket.io-client";
import { FadeCircle } from "@/components/animations/FadeCircle";

export const Receive = () => {

    const socket: Socket = useContext(SocketContext);

    const [ connected, setConnection ] = useState<Boolean | 'pending' | 'error'>(false);

    const emitConn = () => {
        socket.emit('waiting');
    }


    useEffect(() => {
        socket.on('connected', () => setConnection(true))
        return () => {
            socket.off('connected');
        };
    }, [connected]);




    return (
        <Container>
            {(!connected || connected == 'error') && <Button bg={"var(--themeColor)"} onClick={() => {
                setConnection('pending');
                emitConn();
            }}>Receive</Button>}
            {connected == 'pending' && 
                <Container px={0} display={'flex'} flexDir={'column'} height={'80vh'}  alignItems={'center'} justifyContent={'center'}>
                    <Button position={'absolute'} top={'0'} left={'0'} onClick={() => setConnection(false)}>Cancel</Button>
                    <FadeCircle circumference={'180px'} text={'Connecting...'} run={(connected == 'pending') ? true : false} />
                </Container>
            }
            {
                connected == true && <Text textAlign={'center'} fontSize={'2rem'} color={'lawngreen'}>Connected</Text>
            }
            
        </Container>
    )
}