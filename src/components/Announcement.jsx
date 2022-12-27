import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #c9002d;
  color: white;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  font-weight: 500px;
`;

const Announcement = () => {
  return <Container>New styles added! SALE up to 50% off </Container>;
};

export default Announcement;
