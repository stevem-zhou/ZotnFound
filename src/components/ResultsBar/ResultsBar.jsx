import "./ResultsBar.css";
import ResultCard from "../ResultCard/ResultCard";
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
  Box,
} from "@chakra-ui/react";

export default function ResultsBar({ data }) {
  const allResults = data.map((item) => {
    return <ResultCard props={item} />;
  });

  return (
    <Box paddingX="5px" width="20vw" height="80vh" overflowY="scroll">
      {allResults}
    </Box>
  );
}
