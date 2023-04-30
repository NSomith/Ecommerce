import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
 height: 60px;
`

const Wrapper = styled.div`
 padding: 10px 20px;
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

`;
const Right = styled.div`
flex: 1;
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
                <Right>Rg</Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar