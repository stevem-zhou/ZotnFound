import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Switch,
  Button,
  Checkbox,
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
        <FormLabel>Select Type of Items You Are Looking For:</FormLabel>
        <FormControl display="flex" alignItems="center" mb="10px">
          <Switch size="lg" />
          <FormLabel mb="0px" ml="50px" fontSize="large" fontWeight="400">
            Lost
          </FormLabel>
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="50px">
          <Switch size="lg" />
          <FormLabel mb="0px" ml="50px" fontSize="large" fontWeight="400">
            Found
          </FormLabel>
        </FormControl>

        <FormLabel>Select Specific Item:</FormLabel>
        <div className="radio--container">
          <RadioGroup>
            <Stack>
              <Radio size="lg" value="headphones" className="text--spacing">
                Headphones
              </Radio>
              <Radio size="lg" value="waterBottle" className="text--spacing">
                Water Bottle
              </Radio>
              <Radio size="lg" value="backpack" className="text--spacing">
                Backpack
              </Radio>
              <Radio size="lg" value="wallet" className="text--spacing">
                Wallet
              </Radio>
              <Radio size="lg" value="wallet" className="text--spacing">
                Glasses
              </Radio>
              <Radio size="lg" value="wallet" className="text--spacing">
                Keys
              </Radio>
              <Radio size="lg" value="wallet" className="text--spacing">
                Phone
              </Radio>
              <Radio size="lg" value="wallet" className="text--spacing">
                Laptop
              </Radio>
              <Radio size="lg" value="wallet" className="text--spacing">
                Jewelry
              </Radio>
              <Radio size="lg" value="everything" className="text--spacing">
                Everything
              </Radio>
            </Stack>
          </RadioGroup>
        </div>

        <Button mt="20px" _hover={{ bg: '#b4dbd9' }}>Submit</Button>
      </form>
    </div>
  );
}
