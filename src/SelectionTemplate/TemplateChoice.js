import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TmpId } from "../Store/Slices/TemplateSelectionSlice";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";

export default function SwipeableTemporaryDrawer() {
  const dispatch = useDispatch();
  const [selectTemp, setSelectTemp] = useState('');

  console.log(selectTemp, "xcgsdgsd");

  const getid = (id) => {
    setSelectTemp(id);
    dispatch(TmpId(id));
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 700 }}
    
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="flex justify-center  items-center">
        <div class="flex justify-start items-start m-5 mt-10 ">
          <div class="grid lg:grid-cols-2 grid-cols-1  gap-10 lg:gap-[100px]">
            <div class="w-[300px]">
              <img
                onClick={() => getid("1")}
                src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg"
                className="w-[300px] h-[350px] hover:animate-pulse rounded-[10px] hover:bg-yellow-500 bg-blue-500 p-3 "
              />
            </div>

            <div class="w-[300px]">
              <img
                onClick={() => getid("2")}
                src="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg"
                className="w-[300px] h-[350px] hover:animate-pulse rounded-[10px]  hover:bg-yellow-500 bg-blue-500 p-3 "
              />
            </div>

            <div class="w-[300px]">
              <img
                onClick={() => getid("3")}
                src="https://www.jobhero.com/webpages/images/resume-examples/administrative_assistant_example_resume_JH_default.svg"
                className="w-[300px] h-[350px] hover:animate-pulse rounded-[10px]  hover:bg-yellow-500 bg-blue-500   "
              />
            </div>

            <div class="w-[300px]">
              <img
                onClick={() => getid("4")}
                src="https://cdn.enhancv.com/ivy_league_cover_letter_template_1_439b5cab58.png"
                className="w-[300px] h-[350px] hover:animate-pulse  rounded-[10px]  hover:bg-yellow-500 bg-blue-500 p-3  "
              />
            </div>

            <div class="w-[300px]">
              <img
                onClick={() => getid("5")}
                src="https://resumebuild.com/wp-content/uploads/2018/12/carousel_cv20.jpg"
                className="w-[300px] h-[350px] hover:animate-pulse rounded-[10px]  hover:bg-yellow-500 bg-blue-500 p-3 "
              />
            </div>

            <div class="w-[300px]">
              <img
                onClick={() => getid("6")}
                src="https://huntsman.usu.edu/start/images/business-template.png"
                className="w-[300px] h-[350px] hover:animate-pulse  rounded-[10px]  hover:bg-yellow-500 bg-blue-500 p-3"
              />
            </div>
          </div>
        </div>
     
        </div>
      </List>
    </Box>
  );

  return (
    <div className="flex justify-center items-center m-1">
    <button> 
      {["Select Templates"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button  size="large" color="primary" variant="contained"  onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </button>
    </div>
  );
}
