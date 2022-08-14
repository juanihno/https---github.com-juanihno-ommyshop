import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;


const Newsletter = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
const [user_email, setUser_email] = useState('');
    // const [user_name, setUser_name] = useState('user');
    // const [user_subject, setUser_subject] = useState('newsletter');
    // const [message, setMessage] = useState('i want to receive newsletters');
const handleSubmit = (e) => {
  if (user_email) {
    
    

  e.preventDefault();
  emailjs
    .sendForm(
      "service_rofr1ok",
      "template_fuusahe",
      formRef.current,
      "mFWwnorBm0KLfztwz"
    )
    .then(
        (result) => {
          console.log(user_email);

          console.log(result.text);
          setDone(true)
          setUser_email('');


        },
        (error) => {
          console.log(error.text);
        }
      );
  };
    
};
  return (

    <Container>
    <form ref={formRef} onSubmit={handleSubmit}>

      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
      <input type="email" placeholder="Email" value={user_email} onChange={e => setUser_email(e.target.value)} name="user_email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
      {done && "  Thanks you are subscribed "}
      </form>

    </Container>

  )
};

export default Newsletter;

