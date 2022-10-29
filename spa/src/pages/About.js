import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    searchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>라우터 사용 프로젝트</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>Mode + 1</button>
    </div>
  );
};

export default About;
