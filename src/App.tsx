import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasePath, WebPath } from './constants/PathConstant.tsx';
import HeaderContentFooterLayout from './layouts/HeaderContentFooterLayout.tsx';
import AboutPage from './pages/about/index.tsx';
import DemoPage from './pages/demo/index.tsx';
import HomePage from './pages/home/index.tsx';
import SurveyPage from './pages/survey/index.tsx';
import SynthPage from './pages/synth/index.tsx';

interface IPageProps {
  path: string;
  element: React.ReactNode;
  isAccessible: boolean;
}

const PageConfig: IPageProps[] = [
  {
    path: WebPath.SYNTH,
    element: <SynthPage />,
    isAccessible: true,
  },
  {
    path: WebPath.DEMO,
    element: <DemoPage />,
    isAccessible: true,
  },
  {
    path: WebPath.SURVEY,
    element: <SurveyPage />,
    isAccessible: true,
  },
  {
    path: WebPath.ABOUT,
    element: <AboutPage />,
    isAccessible: true,
  },
  {
    path: WebPath.HOME,
    element: <HomePage />,
    isAccessible: true,
  },
];

const App = () => {
  return (
    <>
      <BrowserRouter basename={BasePath}>
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
