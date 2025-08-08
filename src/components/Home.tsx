import { Grid, GridItem } from "@chakra-ui/react";
import { SideNav } from "./SideNav";
import { MainContent } from "./MainContent/MainContent";

export const Home = () => {
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
