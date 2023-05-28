import {
  FormControl,
  FormLabel,
  Switch,
  Button,
  Box,
  Stack,
  Radio,
  RadioGroup,
  Text,
  Flex,
} from "@chakra-ui/react";
import "./Filter.css";

export default function Filter({ setFindFilter }) {
  return (
    <div className="filter--bar">
      <h1 className="filter--title">Filter Markers</h1>
      <form>
        <Flex mb="15px">
          <Switch
            colorScheme="red"
            size="lg"
            defaultChecked
            onChange={() => {
              setFindFilter((prev) => ({ ...prev, isLost: true }));
            }}
          />
          <Text mb="0px" ml="50px" fontSize="xl">
            Lost
          </Text>
        </Flex>

        <Flex mb="30px">
          <Switch
            colorScheme="green"
            size="lg"
            defaultChecked
            onChange={() => {
              setFindFilter((prev) => ({ ...prev, isFound: true }));
            }}
          />
          <Text mb="0px" ml="50px" fontSize="xl">
            Found
          </Text>
        </Flex>

        <Text fontSize="xl" fontWeight="bold" mb="15px">
          Select Specific Item:
        </Text>
        <Box>
          <RadioGroup>
            <Stack>
              <Radio size="lg" value="everything" className="text--spacing">
                Everything
              </Radio>
              <Radio size="lg" value="headphone" className="text--spacing">
                Headphones
              </Radio>
              <Radio size="lg" value="wallet" className="text--spacing">
                Wallet
              </Radio>
              <Radio size="lg" value="key" className="text--spacing">
                Keys
              </Radio>
              <Radio size="lg" value="phone" className="text--spacing">
                Electronics
              </Radio>
              <Radio size="lg" value="others" className="text--spacing">
                Others
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </form>
    </div>
  );
}
