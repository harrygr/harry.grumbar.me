import * as React from "react";
interface IconListItemProps {
  icon: string;
}

export const IconListItem: React.FC<IconListItemProps> = ({
  icon,
  children,
}) => {
  return (
    <li>
      <i className={`fa-fw fa fa-${icon}`} /> {children}
    </li>
  );
};
