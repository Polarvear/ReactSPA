import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({});
  };

  return (
    <div>
      <h1>소개</h1>
      <p>라우터 사용 프로젝트</p>
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
};

export default About;
