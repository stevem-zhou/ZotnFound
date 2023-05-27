import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import "./Filter.css";

export default function Filter() {
  return (
    <div className="filter--bar">
      <FormControl>
        <FormLabel>Lost</FormLabel>
        <Input type="email" />
        
      </FormControl>
    </div>
  );
}
