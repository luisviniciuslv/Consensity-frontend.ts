import styled from "styled-components";

export const CardStyled = styled.div<{ $small?: boolean; $medium?: boolean }>`
position: relative;
height: 150px;

padding: 5px;
border: 5px solid rgba(0, 0, 0, 1);
margin: 5px;

border-radius: 15px;

background-color: #182330 ; 
color: #F0F0F0;
`

export const Title = styled.h3 `
  font-family: sans-serif;
  font-size: 24px;
  margin: 5px;
  margin-left: 5px;
  background-color:#182330 ; 
`

export const Desc = styled.p `
font-family: sans-serif;
font-size: 16px;
line-height: 1.6;
margin: 5px;
margin-left: 5px;
background-color:#182330 ; 
`

export const Image = styled.div`
  width: 50px;
  height: 50px;
  background-color: #3498db;
  position: absolute;
  top: 5px;
  right: 5px;
`

export const Username = styled(Desc)`
  margin-top: 0px;
  margin-left: 3px;
  bottom: 0px;
  right: 5px;
  position: absolute;
`