const ColoredMessaged = ({color,message,children}) =>{

  const contentStyle={
    color,
    fontSize: "20px"
  };

  return (
  <p>
    <p style={contentStyle}>{message||children||"仮テキスト2"}</p>
  </p>
  )};

  export default ColoredMessaged;
