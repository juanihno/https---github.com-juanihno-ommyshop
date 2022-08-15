import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link} from "react-router-dom";


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>OMMY.</Logo>
        <Desc>
          Our pieces are only hand made right after you order it. With this manufacturing model we avoid mass production and fabric waste.
The proccess often leads to longer wait times for the customers (2 to 3 weeks), ensuring quality and environment concious service.


        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link style={{ textDecoration: 'none' }}to={`/`}>Home         
             </Link>
          </ListItem>
          <ListItem>
          <Link style={{ textDecoration: 'none' }} to={`/cart`}>Cart</Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: 'none' }}to={`/products/all`}>All products         
             </Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: 'none' }}to={`/products/new arrivals`}>New arrivals         
             </Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: 'none' }}to={`/products/sale`}>Sales         
             </Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: 'none' }}to={`/products/top`}>Tops         
             </Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: 'none' }}to={`/products/pants`}>Pants         
             </Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: 'none' }}to={`/products/one piece`}>One pieces         
             </Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: 'none' }}to={`/about`}>About us         
             </Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: 'none' }}to={`/refunds`}>Refund policy         
             </Link>
          </ListItem>
          
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 4 glenayer avenue , North Bondi 2026
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +61 434672998
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> ommy@surf.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
