import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BASE_PATH, WEB_PATH } from './constants/PathConstant.tsx';
import HeaderContentFooterLayout from './layouts/HeaderContentFooterLayout.tsx';
import DemoPage from './pages/demo/index.tsx';
import HomePage from './pages/home/index.tsx';
import SurveyPage from './pages/survey/index.tsx';

interface IPageProps {
  path: string;
  element: React.ReactNode;
  isAccessible: boolean;
}

const PageConfig: IPageProps[] = [
  {
    path: WEB_PATH.DEMO,
    element: <DemoPage />,
    isAccessible: true,
  },
  {
    path: WEB_PATH.SURVEY,
    element: <SurveyPage />,
    isAccessible: true,
  },
  {
    path: WEB_PATH.HOME,
    element: <HomePage />,
    isAccessible: true,
  },
];

const App = () => {
  return (
    <>
      <BrowserRouter basename={BASE_PATH}>
        <Routes>
          <Route element={<HeaderContentFooterLayout />}>
            {PageConfig.map((page, index) =>
              page.isAccessible ? (
                <Route key={index} path={page.path} element={page.element} />
              ) : null
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
