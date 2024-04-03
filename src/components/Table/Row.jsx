import React from "react";
import "./Row.css";
import {
  AddIcon,
  MinusIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { IconButton, Box, Checkbox } from "@chakra-ui/react";

export default function Row(props) {
  return (
    <Box className={`rowcontent`}>
      <Box className="checkandname">
        <Checkbox
          border="black"
          isChecked={props.isChecked}
          onChange={props.onChange}
          name={props.type}
        />
        <Box
          className={`${
            props.type === "civil" || "header" ? "bold" : ""
          } packages`}
        >
          {props.name}
        </Box>
      </Box>
      <Box className={`rate ${props.type === "header" ? "bold" : ""}`}>
        {props.rate}
      </Box>
      <Box className={`total ${props.type === "header" ? "bold" : ""}`}>
        {props.type === "header" ? "" : <>₹ </>}
        {props.total}
      </Box>
      {props.type === "civil" ? (
        <IconButton
          colorScheme="teal"
          isRound={true}
          variant="ghost"
          icon={props?.ispackageopen ? <MinusIcon /> : <AddIcon />}
          onClick={props?.Packageexpansionhandler}
        />
      ) : (
        props.type === "activity" && (
          <IconButton
            colorScheme="teal"
            isRound={true}
            variant="ghost"
            icon={
              props?.isactivityopen ? <ChevronUpIcon /> : <ChevronDownIcon />
            }
            onClick={props?.activityexpansionhandler}
          />
        )
      )}
    </Box>
  );
}
