import { useLocation } from "react-router-dom";
import EditSetting from "../components/settingSection/EditSetting";
const Setting = () => {
  const location = useLocation();
  const { userInfo } = location.state || {};
  console.log("user Info: " + userInfo);
  return (
    <>
      <EditSetting userInfo={userInfo} />
    </>
  );
};

export default Setting;
