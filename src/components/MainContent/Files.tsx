import { Container, Tabs } from "@chakra-ui/react";
import { Audio } from "./Media/Audio";

export const Files = ({ files }: { files: File[] }) => {
  const active = {
    color: "var(--themeColor)",
    bg: "white",
  };

  return (
    <Container px={0}>
      <Tabs.Root variant={"outline"}>
        <Tabs.List borderBottom={'1px solid grey'}>
          <Tabs.Trigger _selected={active} value="audio">
            Audio
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
        <Tabs.Content value="audio">
          <Audio files={files} />
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  );
};
