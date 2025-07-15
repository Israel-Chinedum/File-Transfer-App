import { Grid, GridItem } from "@chakra-ui/react";
import { SideNav } from "./SideNav";
import { MainContent } from "./MainContent";

export const Home = () => {
  return (
    <Grid templateColumns={"repeat(6, 1fr)"} w="100vw" h="100vh">
      <GridItem bg={"rgb(61, 49, 224)"} colSpan={1}>
        <SideNav />
      </GridItem>
      <GridItem colSpan={5} bg={"#242424"}>
        <MainContent />
      </GridItem>
    </Grid>
  );
};
