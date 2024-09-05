const Button = ({ name = "Sign In" }) => {
  if (!name) {
    return <div>You need to Add title for this button</div>;
  }
  return <button>{name}</button>;
};

export default Button;
