import { Categories } from "../components/Categories"
import { Header } from "../components/Header"

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Categories/>
    </div>
  )
}

export default MainLayout