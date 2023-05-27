import * as React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Flex,
  Tag,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function ResultCard({ props }) {
  console.log(props);
  return (
    <Card maxW="sm" align={"center"} mb="10px">
      <CardBody>
        <Image src={props.imageUrl} alt="Car key" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Flex justifyContent={"space-between"}>
            <Text color="blue.600" fontSize="md" fontWeight="bold">
              {props.name}
            </Text>
            <Text color="blue.600" fontSize="sm">
              {props.uploadDate}
            </Text>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex justifyContent={"space-between"}>
          <Button
            variant="ghost"
            colorScheme="blue"
            leftIcon={<InfoIcon />}
            size="md"
            w="20"
          >
            View
          </Button>
          {props.isLost ? (
            <Button colorScheme="red" ml="20%" size="md" w="40">
              Lost
            </Button>
          ) : (
            <Button colorScheme="green" ml="20%" size="md" w="40">
              Found
            </Button>
          )}
        </Flex>
      </CardFooter>
    </Card>
  );
}
