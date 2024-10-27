import Header2 from "./components/Header2";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header2 />
      {children}
    </>
  );
};

export default Layout;
