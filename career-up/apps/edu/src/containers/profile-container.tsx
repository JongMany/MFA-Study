import { useAtomValue } from "jotai";
import { userAtom } from "../atoms";
import Profile from "../components/profile";

const ProfileContainer = () => {
  const user = useAtomValue(userAtom);

  return <Profile user={user} />;
};

export default ProfileContainer;
