import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

import StyledIcon from "@/components/common/StyledIcon";

const Container = styled.div`
  text-align: center;
`;

const Comment = styled.div`
  height: 5vh;
  margin: 2em;
  font-size: 1em;
  font-weight: 400;
  color: ${(props) => props.theme.white.color};
  text-shadow: inset 1px 1px 1px ${(props) => props.theme.gray.color};
`;

const AllCycle = styled.div`
  padding: 0.5em;
  color: ${(props) => props.theme.white.color};
  font-size: 3em;
  font-weight: 700;
  font-style: italic;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-shadow: 1px 1px 2px ${(props) => props.theme.gray.color};
`;

const shake = keyframes`
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
`;

const ShakeCamera = styled.div`
  position: absolute;
  top: 35%;
  right: 10%;
  display: inline-block;
  border-radius: 5vw;
  animation: ${shake} 2s ease-in-out infinite;

  color: ${(props) => props.theme.font.color};
  background-color: ${(props) => props.theme.lightGray.color};
`;

const Bubble = styled.div`
  position: absolute;
  top: 24%;
  right: 20%;
  font-size: 5em;
  transform: rotateY(180deg);
`;

const BubbleText = styled.span`
  position: absolute;
  top: 27%;
  right: 23%;
  color: ${(props) => props.theme.gray.color};
  font-size: 1.3em;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontEng};
  z-index: 1;
  text-shadow: 1px 1px 2px ${(props) => props.theme.font.color};
`;

function AnimationCamera({ onClick }) {
  return (
    <Container>
      <AllCycle>All-Cycle</AllCycle>
      <Image
        src="/drink-water.png"
        alt="PETE bottle"
        width={350}
        height={350}
      />
      <BubbleText>Click!</BubbleText>
      <Bubble>
        <StyledIcon icon={faComment} />
      </Bubble>
      <ShakeCamera>
        <FontAwesomeIcon
          icon={faMobileAlt}
          size="8x"
          onClick={onClick}
        />
      </ShakeCamera>
      <Comment>BEFORE BUY DRINK, SEARCH IT!!</Comment>
    </Container>
  );
}

export default AnimationCamera;
