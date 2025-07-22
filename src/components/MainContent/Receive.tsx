import { Container, Tabs } from "@chakra-ui/react";

export const Receive = () => {
  const active = {
    color: "var(--themeColor)",
    bg: "white",
  };

  return (
    <Container>
      <Tabs.Root variant={"outline"}>
        <Tabs.List>
          <Tabs.Trigger _selected={active} value="music">
            Music
          </Tabs.Trigger>
          <Tabs.Trigger _selected={active} value="video">
            Video
          </Tabs.Trigger>
          <Tabs.Trigger _selected={active} value="photo">
            Photo
          </Tabs.Trigger>
          <Tabs.Trigger _selected={active} value="document">
            Document
          </Tabs.Trigger>
          <Tabs.Trigger _selected={active} value="zip">
            Zip
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </Container>
  );
};
