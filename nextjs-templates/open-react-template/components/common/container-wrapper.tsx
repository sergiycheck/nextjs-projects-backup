import React from "react";

export const ContainerWrapper = React.forwardRef<HTMLInputElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { className, ...rest } = props;
    return <div className={`container mx-auto px-4 sm:px-6 ${className ?? ""}`} ref={ref} {...rest} />;
  }
);
