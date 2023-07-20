function Welcome({name}) {
    return <p>Welcom {name}</p>;
  }
  Welcome.defaultProps = {
    name: 'Fabiola',
  };
  export default Welcome;
