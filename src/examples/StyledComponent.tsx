import { styled } from "@linaria/react";
import { ComponentProps } from "react";

type Props = ComponentProps<"div"> & { height: number };

function CoolComponent({ className, style }: Props) {
  return (
    <div className={className} style={style}>
      Cool!!!
    </div>
  );
}

export default styled(CoolComponent)`
  background-color: tomato;
  height: ${(props: any) => props.height}px;
`;
