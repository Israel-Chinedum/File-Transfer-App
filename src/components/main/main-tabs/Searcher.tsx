import { Container, List, Icon, Box, Text, Button } from "@chakra-ui/react"
import { transferFiles } from "@/utilities/transfer_files";
import { icons } from "@/utilities/icons";
import { SocketContext } from "@/Context/SocketContext";
import { Socket } from "socket.io-client";
import { useContext, useState, useEffect } from "react";
import { FadeCircle } from "@/components/animations/FadeCircle";

export const Searcher = ({ files }: { files: File[]}) => {

    const socket: Socket = useContext(SocketContext);

    const [connections, setConn] = useState([]);
    const [error, setError] = useState(false);
    const [connCount, setConnCount] = useState(1);
    
    
    useEffect(() => {
        socket.on('readyConn', (availableConnections) => {
            setConn(availableConnections);
            console.log(availableConnections);  
        });
        socket.on('error', (error) => {
            setError(true);
            console.log(error)
        })
        error && setError(false);
        socket.emit('searchConn');

        return () => {
            socket.off('readyConn');
            socket.off('error');
        }

    },[connCount])


    return (
        <Container bg={'white'} w={'80%'} h={'70vh'} position={'absolute'} borderRadius={'5px'} display={'flex'} flexDir={'column'}>
            <List.Root listStyle={'none'} height={'100%'}>

                {error && 
                <Box textAlign={'center'} pt={'100px'} >
                   <Text color={'grey'} fontSize={'2rem'}>No connections found!</Text>
                   <Button backgroundColor={'var(--themeColor)'} mt={'50px'} onClick={() => setConnCount((prev) => prev + 1)} >Retry</Button> 
                </Box>}



                {(!connections.length && !error) && 
                <Box height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <FadeCircle text="Searching..." circumference="100px" run={((!connections.length && !error) ? true : false)} />
                </Box>
                }



                {!!connections.length && connections.map( (conn: any, index: number) => (
                    <List.Item key={`${conn}${index}`} display={'flex'} justifyContent={'space-between'} margin={'10px'} borderRadius={'5px'} p={'10px'} _hover={{boxShadow: '0px 0px 5px 2px grey'}} bg={'var(--themeColor)'}>
                        <Text>{conn}</Text>
                        <input id={`${index}`} type="checkbox" style={{width: '25px', height: '25px', borderRadius: '50%', accentColor: 'white'}} />
                    </List.Item>
                ))}
            </List.Root>
            {!!connections.length && <Box
            position={"sticky"}
            top={'75%'}
            alignSelf={"center"}
            w={"max-content"}
            bg={"var(--themeColor)"}
            p={"10px"}
            borderRadius={"50%"}
            border={"2px solid white"}
            cursor={"pointer"}
            _hover={{
              bg: "white",
              borderColor: "var(--themeColor)",
              color: "var(--themeColor)",
            }}
            transition={"0.5s"}
            id="send-btn"
            onClick={() => {
              transferFiles(files, socket);
            }}
          >
            <Icon as={icons.LuSend} fontSize={30}></Icon>
          </Box>}
        </Container>
    )
}