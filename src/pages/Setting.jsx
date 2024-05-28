import { useEffect, useState } from "react";
import EditSetting from "../components/settingSection/EditSetting";
import { fetchUser } from "../api/UserAPI";

const Setting = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUser();
        console.log("response: ", response);
        setUserInfo(response);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <EditSetting />
    </>
  );
};

export default Setting;
