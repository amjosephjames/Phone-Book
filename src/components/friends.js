import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeFriend } from "./Global";

export const FriendScreen = () => {
  const data = useSelector((state) => state.myReducer.friend);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        {data?.map((props) => (
          <Card>
            <Image src={props.image} />
            <Content>
              <Name>{props.name}</Name>
              <Email>{props.email}</Email>

              <Line />
              <ButtonHolder>
                <Button
                  bg="red"
                  onClick={() => {
                    dispatch(removeFriend(props));
                  }}
                >
                  {" "}
                  Remove
                </Button>
              </ButtonHolder>

              <Numb>{props.phone}</Numb>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

const Content = styled.div`
  position: absolute;
  left: 60px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0;
`;
const Email = styled.div``;
const ButtonHolder = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
  margin: 10px 0;
`;
const Button = styled.div`
  width: 40%;
  height: 50px;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;
const Line = styled.div`
  flex: 1;
  border-top: 1px solid gray;
  width: 70%;
  margin: 10px 10px;
`;
const Numb = styled.div`
  padding-bottom: 10px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-color: blue;
  border-radius: 50%;
  margin-right: 30px;
  position: absolute;
  bottom: 20px;
  left: -50px;
  border: 2px solid white;
  box-shadow: 2px 10px 20px 1px rgba(0, 0, 0, 0.7);
`;
const Card = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 5px;
  border: 2px solid white;
  position: relative;
  color: black;
  margin: 10px 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
