import * as React from "react";
// import App2 from "Components/src/App";
import App2 from "exporter";

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    console.log({ App2 });
    const { name } = this.props;
    return (
      <>
        <App2 />
        <h1>Hello {name}</h1>
      </>
    );
  }
}

export default App;
