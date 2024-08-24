
import { Box } from "@mui/system";
import useMediaQuery from "../hooks/useMediaQuery";

interface ProgressProps {
  location: Location;
}

const Progress: React.FC<ProgressProps> = ({ location: { pathname } }) => {
  const isPhone = useMediaQuery("(max-width: 460px)");

  const personalInfo = pathname === "/s/personal-information";
  const success = pathname === "/s/success";
  const accountUpdate = pathname === "/s/account-update";
  const cardInformation = pathname === "/s/card-information";
  const uploadDocs = pathname === "/s/upload-docs";

  return (
    <Box
      className="steps"
      sx={{
        color: "#58595b",
        display: success ? "none" : "flex",
        justifyContent: "center",
        padding: " 2rem 0",
        marginTop: ["42px", "60px"],
        alignItems: isPhone ? "flex-end" : "center",
        background: "#fff",
        paddingBottom: 0,
        zIndex: 5,
      }}
    >
      <div className={`${personalInfo ? "step active" : "step"}`}>
        <p>
          Personal{" "}
          <Box
            sx={{
              display: ["none", "initial"],
            }}
          >
            Information
          </Box>
        </p>
        <p>1</p>
      </div>
      <div className={`${cardInformation ? "step active" : "step"}`}>
        <p>
          Card{" "}
          <Box
            sx={{
              display: ["none", "initial"],
            }}
          >
            Information
          </Box>
        </p>
        <p>2</p>
      </div>
      <div className={`${accountUpdate ? "step active" : "step"}`}>
        <p>
          Account{" "}
          <Box
            sx={{
              display: ["none", "initial"],
            }}
          >
            Update
          </Box>
        </p>
        <p>3</p>
      </div>
      {/* <div className={`${success ? "step active" : "step"}`}>
        <p>Success</p>
        <p>4</p>
      </div> */}
      <div className={`${uploadDocs ? "step active" : "step"}`}>
        <p>
          {isPhone ? "Documents" : "Supporting"}{" "}
          <Box
            sx={{
              display: ["none", "initial"],
            }}
          >
            documents
          </Box>
        </p>
        <p>4</p>
      </div>
    </Box>
  );
};

export default Progress;
