import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import AsideComponent from "./components/AsideComponent";
import ContentComponent from "./components/ContentComponent";

function App() {
  return (
    <>
      <div className='main'>
        <HeaderComponent />
        <div className='page-content'>
          <AsideComponent />
          <ContentComponent />
        </div>
      </div>
    </>
  );
}

export default App;
