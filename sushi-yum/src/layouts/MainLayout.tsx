import { Categories } from "../components/Categories"
import { Header } from "../components/Header"

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Categories />
      </div>
    </div>
  );
}

export default MainLayout