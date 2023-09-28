import { Typography } from "@mui/material";
import styled from "styled-components";
interface IButton {
  icon: any;
  text: string;
  color?: string;
  bgColor?: string;
  border?: string;
  fontSize?: number;
}
export const ButtonIcon = ({ icon, text,color,bgColor,border,fontSize }: IButton) => {
  return (
    <>
      <ButtonIc bgColor={bgColor} color={color} border={border}>
        {icon}
        <Typography variant="h6" component="span" sx={{ fontSize: `${fontSize}rem` }}>
          {text}
        </Typography>
      </ButtonIc>
    </>
  );
};

const ButtonIc = styled.button<{
  color?: string;
  bgColor?: string;
  border?: string;
}>`
  /* padding: 10px; */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : "none")};
  border: ${(props) => (props.border ? `${props.border}` : "none")};
  color: ${(props) => (props.color ? `${props.color}` : "none")};
  cursor: pointer;
  margin: 0 10px;
`;
