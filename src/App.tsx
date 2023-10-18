import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";


const App = () => {
  // const user=false;
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <>
        <AppLoading>
          <AppLoadingContents>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
              alt="slack"
            />
            <p>Loading...</p>
          </AppLoadingContents>
        </AppLoading>
      </>
    );
  }

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      )}
    </Router>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

const AppLoadingContents = styled.div`
    text-align: center;
  > img {
    object-fit: contain;
    height: 70px;
    margin-bottom: 20px !important;
  }
`;
