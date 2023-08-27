const ExpandIcon = (props) => {
  return (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiklEQVR4nO3QQQoBQBTG8WdPcgglZ9Es1Ov7z9zFzmlcgZUoiVugnIKUC0xTY+H96lu+/vXMQggh9AasgaO7j7uGc85TSXdJp5/EgZukSyllUnUsaQlsGnYGXsDezAY14UVj+PoN76rCLXLOM0kP4JBSGlkP7j6X9Py82N2H1oukFbDtGg0hhP/wBvfXYU9xOyQYAAAAAElFTkSuQmCC"
      className={props?.class}
      onClick={props?.onClick}
    />
  );
};

export default ExpandIcon;
