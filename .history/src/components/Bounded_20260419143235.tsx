import {
  CSSProperties,
  ElementType,
  ReactNode,
  ComponentPropsWithoutRef,
} from "react";
import clsx from "clsx";

type BoundedOwnProps = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

type BoundedProps<C extends ElementType> = BoundedOwnProps & {
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof BoundedOwnProps | "as">;

export function Bounded<C extends ElementType = "section">({
  as,
  className,
  children,
  ...restProps
}: BoundedProps<C>) {
  const Comp = as || "section";

  return (
    <Comp
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
