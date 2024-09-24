import { ClipLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "100px auto",
};

const Spinner = () => {
    return <ClipLoader color="#581c87" cssOverride={override} size={100} />;
};

export default Spinner;
