import { MdError as ErrorAlert } from "react-icons/md";
import { FaThumbsUp as SuccessAlert } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Alert({ error }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: "2%",
        left: "50%",
        backgroundColor: "green",
      }}
      animate={{ x: "-5%" }}
    >
      {error ? (
        <div>
          <span>{error}</span>
          <ErrorAlert style={{ color: "crimson", fill: "crimson" }} />
        </div>
      ) : (
        <div>
          <span>Success</span>
          <SuccessAlert style={{ color: "limegreen", fill: "limegreen" }} />
        </div>
      )}
    </motion.div>
  );
}
