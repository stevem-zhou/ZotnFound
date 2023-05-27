import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Switch,
  Button,
  Box,
  Text,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import "./Filter.css";

export default function Filter() {
  return (
    <div className="filter--bar">
      <h1 className="filter--title">Filter Markers</h1>
      <form>
        <FormControl display="flex" alignItems="center" mb="10px">
          <Switch colorScheme="red" size="lg" />
          <FormLabel mb="0px" ml="50px" fontSize="xl">
            Lost
          </FormLabel>
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Switch colorScheme="green" size="lg" />
          <FormLabel mb="0px" ml="50px" fontSize="xl">
            Found
          </FormLabel>
        </FormControl>

        <FormLabel fontSize="xl">Select Specific Item:</FormLabel>
        <Box maxHeight="50%" overflow="scroll">
          <RadioGroup>
            <Stack>
              <Radio size="lg" value="headphones" className="text--spacing">
                Headphones
              </Radio>
              <Radio size="lg" value="waterBottle" className="text--spacing">
                Water Bottle
              </Radio>
              <Radio size="lg" value="backpack" className="text--spacing">
                Backpack/Totes
              </Radio>
              <Radio size="lg" value="wallet" className="text--spacing">
                Wallet
              </Radio>
              <Radio size="lg" value="glasses" className="text--spacing">
                ID Cards
              </Radio>
              <Radio size="lg" value="glasses" className="text--spacing">
                Glasses
              </Radio>
              <Radio size="lg" value="keys" className="text--spacing">
                Keys
              </Radio>
              <Radio size="lg" value="phone" className="text--spacing">
                Electronics
              </Radio>
              <Radio size="lg" value="jewelry" className="text--spacing">
                Jewelry
              </Radio>
              <Radio size="lg" value="everything" className="text--spacing">
                Everything
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Button mt="20px" _hover={{ bg: "#b4dbd9" }}>
          Submit
        </Button>
      </form>
    </div>
  );
}
