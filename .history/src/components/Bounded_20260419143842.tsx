import React, {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";
import clsx from "clsx";

type BoundedOwnProps<C extends ElementType> = {
  as?: C;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

type BoundedProps<C extends ElementType> = BoundedOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof BoundedOwnProps<C>>;

export function Bounded<C extends ElementType = "section">(
  props: BoundedProps<C>,
) {
  const { as, className, children, ...restProps } = props;
  const Comp = as || "section";

  return React.createElement(
    Comp,
    {
      ...restProps,
      className: clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className,
      ),
    },
    <div className="mx-auto w-full max-w-6xl">{children}</div>,
  );
}
