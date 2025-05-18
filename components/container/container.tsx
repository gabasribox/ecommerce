import { ReactNode } from "react";
import "./container.css";

/* Container Types */
type ContainerProps = {
  container_width: string;
  container_title: string;
  children: ReactNode;
};

const Container = ({ container_width, container_title, children }: ContainerProps) => {
  /* The component */
  return (
    /* The Container with your style and a variable to define externally your width when he is called */
    <div className={`container-styles ${container_width}`}>
      
      {/* Container Title */}
      <h1 className="container-title">
        {container_title}
      </h1>

      {/* The content children of the container */}
      <div className="container-children">
        {children}
      </div>
    </div>
  );
}

export default Container;