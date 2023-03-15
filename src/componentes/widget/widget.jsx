import { HiHeart } from "react-icons/hi";


function HeartWidget() {
  const styles = {
    fontSize: 25,
  };

  return (
    <section className="widget" style={styles}>
      <HiHeart />
    </section>
  );
}
export default HeartWidget;
