import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./Global";

const AddContact = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myReducer.contact);

  // console.log(data.length);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  // const [name, setName] = useState("")

  const imageUpload = (e) => {
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);
    setImage(fileURL);
  };

  const pushValue = () => {
    const file = {
      id: data.length + 1,
      email,
      phone,
      image,
      name,
    };
    dispatch(addContact(file));
  };

  return (
    <Container>
      <Wrapper>
        <Image src={image} />

        <Lable htmlFor="pix">Upload an Image</Lable>

        <InputImage type="file" id="pix" onChange={imageUpload} />

        <MainInput
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <MainInput
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <MainInput
          placeholder="Enter your Phone Number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <Button onClick={pushValue}>Add to Contact</Button>
      </Wrapper>
    </Container>
  );
};

export default AddContact;

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
const Lable = styled.label`
  padding: 15px 20px;
  background-color: #09386d;
  border-radius: 30px;
  font-weight: bold;
  transform: scale(1);
  transition: all 350ms;
  margin-bottom: 20px;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Button = styled.div`
  transform: scale(1);
  transition: all 350ms;
  margin-bottom: 20px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #09386d;
  margin-top: 30px;
  border-radius: 5px;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const MainInput = styled.input`
  margin: 10px;
  width: 300px;
  height: 50px;
  padding-left: 10px;

  ::placeholder {
    font-family: Raleway;
  }
`;

const InputImage = styled.input`
  display: none;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: red;
  margin: 20px;
  border: 2px solid white;
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
