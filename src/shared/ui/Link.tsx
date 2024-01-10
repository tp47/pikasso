import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  to: string;
  children: ReactNode;
}

function Link({ to, children }: LinkProps) {
  return (
    <RouterLink to={to} className="text-sky-500">
      {children}
    </RouterLink>
  );
}

export { Link };
