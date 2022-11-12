import Main from "../comp/Main";
import Row from "../comp/Row";
import requestApi from "../Requests";
const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId="1" title="Upcoming" fetchURL={requestApi.requestUpcoming} />
      <Row rowId="2" title="Top Rated" fetchURL={requestApi.requestTopRated} />
      <Row rowId="3" title="Popular" fetchURL={requestApi.requestPopular} />
    </div>
  );
};

export default Home;
