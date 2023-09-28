import { Typography } from "@mui/material";
import styled from "styled-components";
interface IButton {
  icon?: any;
  text?: string;
  color?: string;
  bgcolor?: string;
  border?: string;
  fontSize?: number;
  icon1?: any;
  icon2?: any;
  width?: number;
}
export const ButtonIcon = ({
  icon,
  text,
  color,
  bgcolor,
  border,
  fontSize,
}: IButton) => {
  return (
    <>
      <ButtonIc bgcolor={bgcolor} color={color} border={border} >
        {icon}
        <Typography
          variant="h6"
          component="span"
          sx={{ fontSize: `${fontSize}rem` }}
        >
          {text}
        </Typography>
      </ButtonIc>
    </>
  );
};

export const ButtonBetween = ({
  icon1,
  icon2,
  text,
  color,
  bgcolor,
  border,
  fontSize,
  width
}: IButton) => {
  return (
    <>
      <ButtonBetweenIc bgcolor={bgcolor} color={color} border={border} width={width}>
        <div style={{ display: "flex", alignItems: "center", gap:'10px' }}>
          {icon1}
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: `${fontSize}rem` }}
          >
            {text}
          </Typography>
        </div>
        {icon2}
      </ButtonBetweenIc>
    </>
  );
};

const ButtonIc = styled.button<{
  color?: string;
  bgcolor?: string;
  border?: string;
}>`
  /* padding: 10px; */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.bgcolor ? `${props.bgcolor}` : "none")};
  border: ${(props) => (props.border ? `${props.border}` : "none")};
  color: ${(props) => (props.color ? `${props.color}` : "none")};
  cursor: pointer;
  margin: 0 10px;
`;

const ButtonBetweenIc = styled.button<{
  color?: string;
  bgcolor?: string;
  border?: string;
  width?: number;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.bgcolor ? `${props.bgcolor}` : "none")};
  border: ${(props) => (props.border ? `${props.border}` : "none")};
  color: ${(props) => (props.color ? `${props.color}` : "none")};
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  cursor: pointer;
  padding:15px 10px;
  gap: 15px;

  &:hover{
    background: #3699ff;
    color: #fff;
  }
`;
