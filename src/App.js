// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './componant/About/About';
import Blogs from './componant/Blog/Blogs';
import Footer from './componant/Footer/Footer';
// import './App.css';
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import Ragister from './componant/Login/Ragister';
import Notfound from './componant/NotFound/Notfound';
import PrivateRoute from './componant/PrivateRoute/PrivateRoute';
import ServiceDetail from './componant/Services/ServiceDetail';
import Services from './componant/Services/Services';
import AuthProvider from './context/AuthProvider';
import Blogdetail from './componant/Blog/Blogdetail'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/blog">
              <Blogs></Blogs>

            </Route>
            <Route path="/ragister">
              <Ragister></Ragister>
            </Route>
            <PrivateRoute path="/blogDetail/:blogID">
              <Blogdetail></Blogdetail>

            </PrivateRoute>

            <PrivateRoute path="/service/:serviceID">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
