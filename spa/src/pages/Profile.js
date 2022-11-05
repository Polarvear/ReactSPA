import { useParams } from "react-router-dom";

const data = {
  phill: {
    name: "lee",
    dsecription: "리액트 개발자",
  },
  gildong: {
    name: "홍길동",
    dsecription: "주인공",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필 보여주기</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.dsecription}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
