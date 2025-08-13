import { Grid, GridItem } from "@chakra-ui/react";
import { SideNav } from "./navigations/SideNav";
import { MainContent } from "./main/MainContent";

export const Layout = () => {
  return (
    <Grid templateColumns={"repeat(6, 1fr)"} w="100vw" h="100vh">
      <GridItem
        bg={"var(--themeColor)"}
        colSpan={1}
        borderRight={"5px solid grey"}
      >
        <SideNav />
      </GridItem>
      <GridItem colSpan={5} bg={"#242424"} h={"100%"}>
        <MainContent />
      </GridItem>
    </Grid>
  );
};
