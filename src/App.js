import DataTable from "./Table/Table"
import { Box,Text } from "@chakra-ui/react";
function App() {
  return (
    <Box p='3em' textAlign='center'>
      <Text p='1em' fontSize='2xl' textAlign='center' >React Table with Chakra UI</Text>
      <DataTable/>
    </Box>
  );
}

export default App;
