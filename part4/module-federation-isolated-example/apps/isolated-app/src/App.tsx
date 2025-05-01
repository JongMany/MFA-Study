import "./index.css";

export type AppProps = {
  name: string;
};

const App = ({ name }: AppProps) => (
  <div className="container">
    <div>Name: isolated-app</div>
    <div>Framework: react-18</div>
    <div>{name}</div>
  </div>
);

export default App;
