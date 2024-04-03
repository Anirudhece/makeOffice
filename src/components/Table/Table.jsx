import { React, useState } from "react";
import { data } from "../data/data";
import "./Table.css";
import { IconButton, Box, Checkbox } from "@chakra-ui/react";
import {
  AddIcon,
  MinusIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

const Row = (props) => {
  return (
    <Box className={`custom-row-content`}>
      <Box className={`custom-check-and-name`}>
        <Checkbox
          border="black"
          isChecked={props.isChecked}
          onChange={props.onChange}
          name={props.type}
        />
        <Box
          className={`${
            props.type === "civil" || "header" ? "custom-bold" : ""
          } custom-packages`}
        >
          {props.name}
        </Box>
      </Box>
      <Box
        className={`custom-rate ${
          props.type === "header" ? "custom-bold" : ""
        }`}
      >
        {props.rate}
      </Box>
      <Box
        className={`custom-total ${
          props.type === "header" ? "custom-bold" : ""
        }`}
      >
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
};

const Table = () => {
  return (
    <>
      <Box m="2em">
        <Box bg="rgb(219, 235, 251)">
          <Row
            type="header"
            name="Package"
            rate={
              <>
                Rate <i>(in sqft)</i>
              </>
            }
            total="Total"
          />
        </Box>

        {data.map((obj, indx) => {
          const [ispackageopen, setispackageopen] = useState(false);
          const Packageexpansionhandler = () => {
            ispackageopen ? setispackageopen(false) : setispackageopen(true);
          };

          return (
            <Box key={indx} className="custom-row">
              <Box borderBottom="0.5px solid lightgrey" borderTop="none">
                <Row
                  type="civil"
                  name={obj.Package}
                  rate={obj.Rate}
                  total={obj.Total}
                  ispackageopen={ispackageopen}
                  Packageexpansionhandler={Packageexpansionhandler}
                />

                {obj.Activity.map((act, indx) => {
                  const [isactivityopen, setisactivityopen] = useState(false);
                  const activityexpansionhandler = () => {
                    isactivityopen
                      ? setisactivityopen(false)
                      : setisactivityopen(true);
                  };
                  return (
                    <Box key={indx} className="custom-row">
                      {ispackageopen === true && (
                        <Box className="custom-activity">
                          <Row
                            type="activity"
                            name={act.Package}
                            rate={act.Rate}
                            total={act.Total}
                            isactivityopen={isactivityopen}
                            activityexpansionhandler={activityexpansionhandler}
                          />
                          {act.workitem.map((work, indx) => {
                            return (
                              <Box className="custom-row">
                                {isactivityopen === true && (
                                  <Box key={indx} className="custom-work">
                                    <Row
                                      type="work"
                                      name={work.Package}
                                      rate={work.Rate}
                                      total={work.Total}
                                    />
                                  </Box>
                                )}
                              </Box>
                            );
                          })}
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
export default Table;
