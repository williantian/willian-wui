import React, { Fragment } from 'react';
import Button from "./button";

const ButtonExample: React.FunctionComponent = () =>{
  return (
    <Fragment>
      <Button>hello</Button>
      <Button level="dangerous">hello</Button>
      <Button level="important">hello</Button>
    </Fragment>
  )
};
export default ButtonExample;