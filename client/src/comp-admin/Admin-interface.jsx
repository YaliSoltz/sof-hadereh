import "../css/Admin.css";
import Header from "./header";
import Main from "./main";
const AdminInterface = () => {
  return (
    <>
      <div className="Container">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <Main />
        </div>
      </div>
    </>
  );
};

export default AdminInterface;
