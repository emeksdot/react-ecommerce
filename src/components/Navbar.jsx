import { Badge } from "@material-ui/core";
import { Mail, Search } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: aqua;
`;

const Band = styled.div`
  padding: 10px 20px;
  display: flex;
`;

const Left = styled.div`
  background-color: red;
  height: 50px;
  flex: 1;
  align-items: center;
  justify-contents: center;
`;

const Logo1 = styled.span`
  font-size: 14px;
  flex-direction: start;
`;
const Center = styled.div`
  background-color: yellow;
  height: 50px;
  flex: 1;
  flex-direction: start;
`;
const SearchInput = styled.div`
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  background-color: white;
  border: none;
`;

const Right = styled.div`
  //   background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Band>
        <Left>
          <Logo1>
            <h1>EDGE RESOURCES</h1>
          </Logo1>
        </Left>
        <Center>
          <SearchInput>
            <Input />
            <Search />
          </SearchInput>
        </Center>
        <Right>
          YORIYORI
          <ShoppingCartOutlined />
          <Badge color="secondary" badgeContent={99}>
            <Mail />
          </Badge>
        </Right>
      </Band>
    </Container>
  );
};

export default Navbar;
