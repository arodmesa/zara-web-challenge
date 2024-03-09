"use client";
import ScrollContainer, {
  ScrollContainerProps,
} from "react-indiana-drag-scroll";

export default function ScrollContainerWrapper(props: ScrollContainerProps) {
  const { children, ref, ...rest } = props;
  return <ScrollContainer {...rest}>{children}</ScrollContainer>;
}
