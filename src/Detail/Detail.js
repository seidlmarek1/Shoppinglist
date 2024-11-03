import Header from "./Header";
import Toolbar from "./Toolbar";
import MemberList from "./MemberList";
import ItemList from "./ItemList";
import DetailProvider from "./DetailProvider";

function Detail() {
  return (
    <div style= {{}}>
      <DetailProvider>
        <div style= {{}}>
          <Header />
          </div>
        <div>
          <Toolbar />
        </div>
        <MemberList />
        <ItemList />
      </DetailProvider>
    </div>
  );
}

export default Detail;
