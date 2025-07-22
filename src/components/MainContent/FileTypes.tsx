import { Box, Text } from "@chakra-ui/react";

export const VideoTypes = ({ file }: { file: File }) => {
  return (
    <>
      <Box
        border={"1px dashed var(--themeColor)"}
        w={"200px"}
        h={"100px"}
        overflow={"hidden"}
        bg={"black"}
      >
        <video
          style={{ width: "inherit", height: "inherit" }}
          controls
          src={URL.createObjectURL(file)}
        ></video>
      </Box>
      <Text>{file.name}</Text>
    </>
  );
};

export const AudioTypes = (file: any) => {};
