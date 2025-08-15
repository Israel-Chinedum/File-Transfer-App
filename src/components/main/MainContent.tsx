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
import { MIMETypesAndIcons } from "@/utilities/icons";
import { Transfer } from "./main-tabs/Transfer";
import { Files } from "./main-tabs/Files";
import { Receive } from "./main-tabs/Receive";
import { mainContent } from "@/utilities/main_content";
import { useRef, useState } from "react";

export const MainContent = () => {
  const tabStyle = {
    bg: "var(--transColor)",
    transition: "0.5s",
    color: "white",
    borderColor: "white",
  };

  const fileInput = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  

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
            <Tabs.Trigger value="files" _selected={tabStyle} border={"none"}>
              Files
            </Tabs.Trigger>
            <Tabs.Trigger value="receive" _selected={tabStyle} border={"none"}>
              Receive
            </Tabs.Trigger>
          </HStack>
        </Tabs.List>

        {/* =====TABS CONTENT===== */}
        <Tabs.Content
          value="transfer"
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          overflowY={"scroll"}
          // alignItems={"center"}
        >
          <Transfer
            files={files}
            fileInput={fileInput}
            read={read}
          />
        </Tabs.Content>
        <Tabs.Content value="files">
          <Files/>
        </Tabs.Content>
        <Tabs.Content value="receive">
          <Receive />
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  );
};
