"use client";
import ScrollContainer, {
  type ScrollContainerProps,
} from "react-indiana-drag-scroll";

export default function ScrollContainerWrapper(props: ScrollContainerProps) {
  const { children, ref, ...rest } = props;
  return (
    <ScrollContainer {...rest}>
      {children}
      {ref}
    </ScrollContainer>
  );
}
