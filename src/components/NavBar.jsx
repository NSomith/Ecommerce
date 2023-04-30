import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
const Container = styled.div`
 height: 60px;
`

const Wrapper = styled.div`
 padding: 0px 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 12px;
cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
border: none;
`;

const Center = styled.div`
flex: 1;
`;

const Logo = styled.h1`
    text-align: center;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin: auto auto;
`;

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center><Logo>HI</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar