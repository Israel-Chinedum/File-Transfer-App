import { Container, Box, Icon, Text } from '@chakra-ui/react';
import { icons } from '@/utilities/icons';

export const Audio = () => {
    const files: any = [];
    return (
        <Container px={0}>
            {files.map((file: any, index: number) => {         
                return (
                    <Box key={`${index}${file.name}`}>
                        <Icon
                        as={icons.FaFileAudio}
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