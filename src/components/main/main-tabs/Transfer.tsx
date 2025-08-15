import { HStack, Icon, Box, Button, Text } from "@chakra-ui/react";
import { icons } from "@/utilities/icons";
import { VideoTypes } from "../FileTypes";
import { Searcher } from "./Searcher";
import { useState } from "react";
import { MIMETypesAndIcons } from "@/utilities/icons";


type props = {
  files: File[];
  fileInput: any;
  read: any;
};

export const Transfer = ({
  files,
  fileInput,
  read,
}: props) => {


  const [ transferWindow, setTransferWindow ] = useState< 'open' | 'close' >('close')

  return (
    <>
      {!files.length && (
        <>
          <HStack fontSize={50} color={"grey"} justify={"center"}>
            <Icon as={icons.FaFile}></Icon>
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
        <Box display={"flex"} flexDir={"column"} alignItems={"center"} height={'98%'} overflowY={'scroll'}>
          <Box
            position={"sticky"}
            top={"0"}
            display={"flex"}
            justifyContent={"end"}
            p={"10px"}
            width={"100%"}
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
              p={5}
              boxShadow={"0px 0px 10px 2px var(--borderColor)"}
              key={`${index}${file.name}`}
              width={"95%"}
              mb={"20px"}
              borderRadius={"5px"}
            >
              {MIMETypesAndIcons.map((obj: any, index: number) => {
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
                }
                if (file.type == obj.type) {
                  return (
                    <Box key={`${index}${file.name}`}>
                      <Icon
                        as={obj.icon}
                        fontSize={"4rem"}
                        color={"white"}
                        bg={"var(--themeColor)"}
                        borderRadius={"7px"}
                      ></Icon>
                      <Text>{file.name}</Text>
                    </Box>
                  );
                }
              })}
              {(() => {
                const type = MIMETypesAndIcons.filter(
                  (obj: any) => obj.type == file.type
                );
                if (type.length == 0) {
                  return (
                    <Box>
                      <Icon
                        as={icons.FaFile}
                        fontSize={"4rem"}
                        color={"white"}
                        bg={"grey"}
                        borderRadius={"7px"}
                      ></Icon>
                      <Text>{file.name}</Text>
                    </Box>
                  );
                }
              })()}
            </Box>
          ))}

          {(transferWindow == 'open') && <Searcher files={files} />}
          <Button
          position={'sticky'}
          top={'90%'}
          bottom={'0%'}
          bg={'var(--themeColor)'}
          onClick={() => {
            const transferState = (transferWindow == 'open') ? 'close' : 'open';
            setTransferWindow(transferState);
          }}>{(transferWindow == 'open') ? 'Close' : 'transfer'}</Button>
        </Box>
      )}
    </>
  );
};
