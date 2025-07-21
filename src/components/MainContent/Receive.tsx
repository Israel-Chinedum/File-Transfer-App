import { Container, Tabs } from "@chakra-ui/react";

export const Receive = () => {
  return (
    <Container>
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger value="music">Music</Tabs.Trigger>
          <Tabs.Trigger value="video">Video</Tabs.Trigger>
          <Tabs.Trigger value="photo">Photo</Tabs.Trigger>
          <Tabs.Trigger value="document">Document</Tabs.Trigger>
          <Tabs.Trigger value="zip">Zip</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </Container>
  );
};
