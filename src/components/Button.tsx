const Button = (props: { children: any; className: string }) => {
  const { children, className } = props;

  return <button className={className}>{children}</button>;
};

export default Button;
