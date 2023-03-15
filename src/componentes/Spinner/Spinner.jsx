import { FlapperSpinner } from "react-spinners-kit";


const Spinner = () => {
  const styles = {
    paddingLeft: "40%",
    paddingTop: "15%",
  };

  return (
    <div style={styles}>
      <FlapperSpinner size={100} color="turquoise" />
    </div>
  );
};

export default Spinner;
