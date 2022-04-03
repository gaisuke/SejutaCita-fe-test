import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmark from "./pages/Bookmark";
import Category from "./pages/Category";
import WithNav from "./component/WithNav";
import WithoutNav from "./component/WithoutNav";
import Home from "./pages/Home";
import SingleBook from "./pages/SingleBook";

function App() {
  return (
    <div className='pt-20 flex flex-col items-center h-full'>
      <BrowserRouter>
        <Routes>
          <Route element={<WithNav />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route element={<WithoutNav />}>
            <Route path='/books/:cat/:id' element={<SingleBook />} />
            <Route path='/category/:cat' element={<Category />} />
            <Route path='/bookmarks' element={<Bookmark />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
