// function Clock(props) {
//   return (
//     <div>
//       <h1>What's the time now?</h1>
//       <h2>It is {props.time}</h2>
//     </div>
//   );
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      console.log("set Interval");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(timerI);
  }

  render() {
    return (
      <div>
        <h1>What's the time now?</h1>
        <h2>It is {this.state.time}</h2>
      </div>
    );
  }
}

const element = <Clock />;
const container = document.getElementById("app");
ReactDOM.render(element, container);
