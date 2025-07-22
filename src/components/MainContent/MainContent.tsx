import {
  Button,
  Container,
  HStack,
  Tabs,
  Text,
  Icon,
  Box,
  Stack,
} from "@chakra-ui/react";
import {
  FaFilePdf,
  FaFileImage,
  FaFileAudio,
  FaFileVideo,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileArchive,
  FaFileCode,
  FaFileAlt,
  FaFileCsv,
  FaMarkdown,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPython,
  FaJava,
  FaTerminal,
} from "react-icons/fa";
import { SiTypescript, SiC, SiCplusplus } from "react-icons/si";
import type { fileMetaData } from "../Types&Interfaces";
import { Transfer } from "./Transfer";
import { Receive } from "./Receive";
import { mainContent } from "./main_content";
import { useRef, useState } from "react";
import { MdBorderColor } from "react-icons/md";

export const MainContent = () => {
  const tabStyle = {
    bg: "var(--transColor)",
    transition: "0.5s",
    color: "white",
    borderColor: "white",
  };

  const fileInput = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const MIMETypesAndIcons = useRef([
    // Images
    { type: "image/jpeg", icon: FaFileImage },
    { type: "image/png", icon: FaFileImage },
    { type: "image/gif", icon: FaFileImage },
    { type: "image/webp", icon: FaFileImage },
    { type: "image/bmp", icon: FaFileImage },
    { type: "image/svg+xml", icon: FaFileImage },
    { type: "image/x-icon", icon: FaFileImage },
    { type: "image/tiff", icon: FaFileImage },

    // Documents
    { type: "application/pdf", icon: FaFilePdf },
    { type: "application/msword", icon: FaFileWord },
    {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      icon: FaFileWord,
    },
    { type: "application/vnd.ms-excel", icon: FaFileExcel },
    {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      icon: FaFileExcel,
    },
    { type: "application/vnd.ms-powerpoint", icon: FaFilePowerpoint },
    {
      type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      icon: FaFilePowerpoint,
    },
    { type: "text/plain", icon: FaFileAlt },
    { type: "text/csv", icon: FaFileCsv },
    { type: "application/rtf", icon: FaFileAlt },
    { type: "application/vnd.oasis.opendocument.text", icon: FaFileAlt },
    { type: "text/markdown", icon: FaMarkdown },

    // Audio
    { type: "audio/mpeg", icon: FaFileAudio },
    { type: "audio/wav", icon: FaFileAudio },
    { type: "audio/ogg", icon: FaFileAudio },
    { type: "audio/mp4", icon: FaFileAudio },
    { type: "audio/aac", icon: FaFileAudio },
    { type: "audio/flac", icon: FaFileAudio },

    // Video
    { type: "video/mp4", icon: FaFileVideo },
    { type: "video/quicktime", icon: FaFileVideo },
    { type: "video/x-msvideo", icon: FaFileVideo },
    { type: "video/webm", icon: FaFileVideo },
    { type: "video/x-matroska", icon: FaFileVideo },
    { type: "video/x-ms-wmv", icon: FaFileVideo },
    { type: "video/x-flv", icon: FaFileVideo },

    // Archives
    { type: "application/zip", icon: FaFileArchive },
    { type: "application/vnd.rar", icon: FaFileArchive },
    { type: "application/x-7z-compressed", icon: FaFileArchive },
    { type: "application/x-tar", icon: FaFileArchive },
    { type: "application/gzip", icon: FaFileArchive },

    // Code/Source
    { type: "text/html", icon: FaHtml5 },
    { type: "text/css", icon: FaCss3Alt },
    { type: "text/javascript", icon: FaJs },
    { type: "application/typescript", icon: SiTypescript },
    { type: "application/json", icon: FaFileCode },
    { type: "application/xml", icon: FaFileCode },
    { type: "application/x-httpd-php", icon: FaPhp },
    { type: "text/x-python", icon: FaPython },
    { type: "text/x-java-source", icon: FaJava },
    { type: "text/x-c", icon: SiC },
    { type: "text/x-c++", icon: SiCplusplus },
    { type: "application/x-sh", icon: FaTerminal },
  ]);

  const { read } = mainContent({ setFiles });

  return (
    <Container py={10} h={"100vh"} color={"white"}>
      <input type="file" multiple style={{ display: "none" }} ref={fileInput} />

      <Tabs.Root h={"100%"} defaultValue={"transfer"} variant={"outline"}>
        <Tabs.List borderBottom={"1px solid grey"}>
          <HStack>
            <Tabs.Trigger value="transfer" _selected={tabStyle} border={"none"}>
              Transfer
            </Tabs.Trigger>
            <Tabs.Trigger value="receive" _selected={tabStyle} border={"none"}>
              Receive
            </Tabs.Trigger>
          </HStack>
        </Tabs.List>

        {/* =====TABS CONTENT===== */}
        <Tabs.Content
          value="transfer"
          maxHeight={"96%"}
          display={"flex"}
          flexDirection={"column"}
          overflowY={"scroll"}
          // alignItems={"center"}
        >
          <Transfer
            files={files}
            fileInput={fileInput}
            read={read}
            MIMETypesAndIcons={MIMETypesAndIcons}
          />
        </Tabs.Content>
        <Tabs.Content value="receive">
          <Receive />
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  );
};
