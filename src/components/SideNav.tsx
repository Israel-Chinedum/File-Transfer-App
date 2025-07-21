import { List, Icon, Text, Box } from "@chakra-ui/react";
import { FiShare2 } from "react-icons/fi";

export const SideNav = () => {
  const myStyle = {
    bg: "var(--bgColor)",
    cursor: "pointer",
  };

  return (
    <List.Root>
      <List.Item
        display={"flex"}
        alignItems={"center"}
        _hover={myStyle}
        py={2}
        px={20}
        fontSize={20}
      >
        <Icon as={FiShare2}></Icon>
        <Box w={"10px"}></Box>
        <Text>Share</Text>
      </List.Item>
    </List.Root>
  );
};
