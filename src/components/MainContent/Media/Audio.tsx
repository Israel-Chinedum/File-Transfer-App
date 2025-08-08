import { Container, Box, Icon, Text } from '@chakra-ui/react';
import { FaFileAudio } from 'react-icons/fa';

export const Audio = ({ files }: { files: File[] }) => {
    return (
        <Container px={0}>
            {files.map((file, index) => {         
                return (
                    <Box key={`${index}${file.name}`}>
                        <Icon
                        as={FaFileAudio}
                        fontSize={"4rem"}
                        color={"white"}
                        bg={"var(--themeColor)"}
                        borderRadius={"7px"}
                        m={5}
                        ></Icon>
                        <audio
                        src={`${URL.createObjectURL(file)}`}
                        controls
                        ></audio>
                        <Text>{file.name}</Text>
                    </Box>
                );
            })}
        </Container>
    )
}