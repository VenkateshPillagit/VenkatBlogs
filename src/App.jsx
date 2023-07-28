import React, { useState } from 'react';
import {
  ThemeProvider, createTheme,
} from '@mui/material';
import './App.css';
import {
  Outlet, Route, Routes,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import BlogContent from './YSI-Blogs/Content/BlogContent';
import NewPost from './YSI-Blogs/AddNewPost/NewPost';
import Home from './YSI-Blogs/Home';
import BlogList from './YSI-Blogs/Content/BlogList.json';
import Posts from './YSI-Blogs/Posts';
import AboutUs from './YSI-Blogs/AboutUs';
import ContactUs from './YSI-Blogs/ContactUs';
import NavBar from './YSI-Blogs/NavBar';
import messages from '../public/locale/index';
import Login from './YSI-Blogs/Login/Login';
import ProtectedRoutes from './YSI-Blogs/Routes/ProtectedRoutes';
import GlobalContextProvider from './YSI-Blogs/BlogContext/GlobalContext';

const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 700,
  //     md: 1000,
  //     lg: 1300,
  //     xl: 1636,
  //   },
  // },
  palette: {
    secondary: {
      main: '#fff',
    },
    neutral: {
      main: '#E00E0E',
    },
    appbar: {
      main: '#fafafa',
    },
  },
});

function App() {
  const [blogsList, setBlogsList] = useState(BlogList);
  const [login, setLogin] = useState(false);
  const pathName = new URL(window.location.href).pathname.split('/');
  const locale = pathName[1].split('-')[0];

  return (
    <GlobalContextProvider>
      <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
        <div className="app-container">
          <ThemeProvider theme={theme}>
            <NavBar pathName={pathName[1]} auth={login} setLogin={setLogin} />
            <Routes>
              <Route path={pathName[1]} element={<Outlet />}>
                <Route path="login" element={<Login pathName={pathName[1]} setLogin={setLogin} />} />
                <Route
                  path="home"
                  element={(
                    <ProtectedRoutes auth={login} pathName={pathName[1]}>
                      <Home blogsList={blogsList} pathName={pathName[1]} />
                    </ProtectedRoutes>
                )}
                />
                <Route
                  path="newpost"
                  element={(
                    <ProtectedRoutes auth={login} pathName={pathName[1]}>
                      <NewPost setBlogsList={setBlogsList} pathName={pathName[1]} />
                    </ProtectedRoutes>
                )}
                />
                <Route path="blogs" Component={Posts}>
                  {
                  blogsList.map((item) => (
                    <Route
                      key={item.path}
                      path={item.path}
                      element={(
                        <BlogContent
                          pathName={pathName[1]}
                          selectedBlog={item}
                          blogsList={blogsList}
                        />
                      )}
                    />
                  ))
                }
                </Route>
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path="*" element={<Login pathName={pathName[1]} setLogin={setLogin} />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </div>
      </IntlProvider>
    </GlobalContextProvider>
  );
}

export default App;
