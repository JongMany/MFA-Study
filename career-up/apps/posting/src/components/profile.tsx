import { useEffect, useState } from "react";
import { useAuth0Client } from "@career-up/shell-router";
import { UserType } from "../types";
import { getUser } from "../apis";
import "./profile.scss";

export default function Profile() {
  const auth0Client = useAuth0Client();
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const user = await getUser(token);
        console.log(token, user);
        setUser(user);
      } catch (error) {
        alert(error);
      }
    })();
  }, [auth0Client]);

  if (user === null) {
    return null;
  }
  return (
    <div className="posting--profile">
      <div className="posting--profile-top">
        <img src={user.picture} />
        <div className="posting--profile-name">{user.name}</div>
        <div className="posting--profile-email">{user.email}</div>
      </div>
      <div className="posting--profile-bottom">
        <div className="posting--profile-bottom-item">
          <div>프로필 조회자</div>
          <div className="posting--profile-bottom-item-count">
            {user.view_count}
          </div>
        </div>
        <div className="posting--profile-bottom-item">
          <div>업데이트 노출</div>
          <div className="posting--profile-bottom-item-count">
            {user.update_count}
          </div>
        </div>
      </div>
    </div>
  );
}
