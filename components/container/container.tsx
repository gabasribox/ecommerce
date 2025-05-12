import { ReactNode } from "react";
import "./container.css";

type ContainerProps = {
  container_width: string;
  container_title: string;
  children: ReactNode;
};

const Container = ({ container_width, container_title, children }: ContainerProps) => {
  return (
    <div className={`container-styles ${container_width}`}>
      <h1 className="container-title">
        {container_title}
      </h1>
      {children}
    </div>
  );
}

export default Container;