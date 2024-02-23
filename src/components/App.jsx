import Stuff from './stuff.jsx';
import Profile from './profile.jsx';
import TestSearch from "./TestSearch"
import Forms from "./forms"
import Dropdown from "./Dropdown"
import { BrowserRouter, Route, Routes } from "react-router-dom"



const App = () => {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Stuff />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/search">
                    <Route path ="/search/:profile.id" element = {<TestSearch />}/>
                  </Route>
                  <Route path='*' element={<h3>Page not found</h3>} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default  App 