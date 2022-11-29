import './App.css';
import drizzleOptions from "./drizzleOptions";
import { Drizzle, generateStore } from '@drizzle/store';
import { DrizzleContext } from '@drizzle/react-plugin';
// import InfoContainer from "./components/InfoContainer";
import MyComponent from './components/MyComponent';

// 使用 drizzle 的方式
// const drizzleStore = generateStore(drizzleOptions);
// const drizzle = new Drizzle(drizzleOptions, drizzleStore);

//使用 event 的方式(把 drizzle 包在 toas event當中)
import store from "./middleware";
const drizzle = new Drizzle(drizzleOptions, store);

function App() {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {(drizzleContext) => {
          const { drizzle, drizzleState, initialized } = drizzleContext;
          if (!initialized) {
            return "Loading...";
          }

          return <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;
