import { React, useState } from "react";
import { data } from "../data/data";
import Row from "./Row";

import { IconButton, Box, Checkbox } from "@chakra-ui/react";

export default function Table() {
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
            <Box key={indx} className="row">
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
                    <Box key={indx} className="row">
                      {ispackageopen === true && (
                        <Box className="activity">
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
                              <Box className="row">
                                {isactivityopen === true && (
                                  <Box key={indx} className="work">
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
}
