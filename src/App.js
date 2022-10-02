import { Fragment, useContext } from "react";
import MainLayout from "./components/layout/MainLayout.jsx";
import TableComponent from "./components/TableComponent.jsx";
import { UserContext } from "./context/userContext";
function App() {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <Fragment>
      <MainLayout>
        <TableComponent />
      </MainLayout>
    </Fragment>
  );
}

export default App;
