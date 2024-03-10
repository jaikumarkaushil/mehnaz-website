export const MobileMdBreakpoint = ({ children }) => {
  return <div className="d-block d-md-none">{children}</div>;
};

export const DesktopMdBreakpoint = ({ children }) => {
  return <div className="d-none d-md-block">{children}</div>;
};
