import { HStack, Icon, Box, Button, Text } from "@chakra-ui/react";
import { FaFile, FaFileAudio } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { VideoTypes, AudioTypes } from "./FileTypes";
import { transferFiles } from "./transfer_files";

type props = {
  files: File[];
  fileInput: any;
  read: any;
  MIMETypesAndIcons: any;
};

export const Transfer = ({
  files,
  fileInput,
  read,
  MIMETypesAndIcons,
}: props) => {
  return (
    <>
      {!files.length && (
        <>
          <HStack fontSize={50} color={"grey"} justify={"center"}>
            <Icon as={FaFile}></Icon>
            <Text>No file selected</Text>
          </HStack>
          <Button
            bg={"var(--themeColor)"}
            color={"white"}
            fontSize={16}
            w={"max-content"}
            marginTop={20}
            onClick={() => {
              fileInput.current?.click();
              read(fileInput.current);
            }}
          >
            Select file
          </Button>
        </>
      )}

      {files.length !== 0 && (
        <Box display={"flex"} flexDir={"column"}>
          <Box
            position={"sticky"}
            top={"0"}
            display={"flex"}
            justifyContent={"end"}
            p={"10px"}
          >
            <HStack bg={"var(--transColor)"} p={"10px"} borderRadius={"5px"}>
              <Text>
                {files.length} {files.length > 1 ? "files" : "file"} selected
              </Text>
              <Button
                bg={"var(--themeColor)"}
                color={"white"}
                fontSize={16}
                alignSelf={"end"}
                border={"1px solid white"}
                w={"max-content"}
                onClick={() => {
                  fileInput.current?.click();
                  read(fileInput.current);
                }}
              >
                Select file
              </Button>
            </HStack>
          </Box>
          {files.map((file: any, index: number) => (
            <Box
              py={5}
              borderBottom={"1px solid grey"}
              key={`${index}${file.name}`}
            >
              {MIMETypesAndIcons.current.map((obj: any, index: number) => {
                if (
                  file.type.split("/")[0] == "video" &&
                  file.type == obj.type
                ) {
                  console.log(file.type);
                  return (
                    <VideoTypes
                      key={`${index}${file.name}`}
                      file={file}
                    ></VideoTypes>
                  );
                }
                if (
                  file.type.split("/")[0] == "audio" &&
                  file.type == obj.type
                ) {
                  console.log(file.type);
                  return (
                    <Box key={`${index}${file.name}`}>
                      <Icon
                        as={FaFileAudio}
                        fontSize={"4rem"}
                        color={"white"}
                        bg={"var(--themeColor)"}
                        borderRadius={"1rem"}
                        m={5}
                      ></Icon>
                      <audio
                        src={`${URL.createObjectURL(file)}`}
                        controls
                      ></audio>
                      <Text>{file.name}</Text>
                    </Box>
                  );
                }
                if (file.type == obj.type) {
                  return (
                    <Box key={`${index}${file.name}`}>
                      <Icon
                        as={obj.icon}
                        fontSize={"4rem"}
                        color={"white"}
                        bg={"var(--themeColor)"}
                        borderRadius={"1rem"}
                      ></Icon>
                      <Text>{file.fileName}</Text>
                    </Box>
                  );
                }
              })}
              {(() => {
                const type = MIMETypesAndIcons.current.filter(
                  (obj: any) => obj.type == file.type
                );
                if (type.length == 0) {
                  return (
                    <Box>
                      <Icon
                        as={FaFile}
                        fontSize={"4rem"}
                        color={"white"}
                        bg={"grey"}
                        borderRadius={"1rem"}
                      ></Icon>
                      <Text>{file.name}</Text>
                    </Box>
                  );
                }
              })()}
            </Box>
          ))}
          <Box
            position={"sticky"}
            bottom={"50px"}
            right={"50px"}
            alignSelf={"end"}
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
              transferFiles(files);
            }}
          >
            <Icon as={LuSend} fontSize={30}></Icon>
          </Box>
        </Box>
      )}
    </>
  );
};
