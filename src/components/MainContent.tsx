import { Button, Container, HStack, Tabs, Text, Icon } from "@chakra-ui/react";
import { FaFile } from "react-icons/fa";

export const MainContent = () => {
  const tabStyle = {
    bg: "rgba(61, 49, 224, 0.37)",
    transition: "0.5s",
  };

  return (
    <Container py={10} h={"100%"}>
      <Tabs.Root h={"100%"} defaultValue={"transfer"}>
        <Tabs.List borderBottom={"1px solid grey"}>
          <HStack>
            <Tabs.Trigger
              //   borderRadius={0}
              value="transfer"
              _selected={tabStyle}
            >
              Transfer
            </Tabs.Trigger>
            <Tabs.Trigger value="recieve" _selected={tabStyle}>
              Recieve
            </Tabs.Trigger>
          </HStack>
        </Tabs.List>

        {/* =====TABS CONTENT===== */}
        <Tabs.Content value="transfer" h={"96%"}>
          <HStack fontSize={50} color={"grey"} justify={"center"}>
            <Icon as={FaFile}></Icon>
            <Text>No file selected</Text>
          </HStack>
          <Button bg={"rgba(61, 49, 224, 1)"} color={"white"} fontSize={16}>
            Select file
          </Button>
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  );
};
