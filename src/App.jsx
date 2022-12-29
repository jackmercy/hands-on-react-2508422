import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Support from './components/Support';
import ListCast from './components/ListCast';

function App() {
  const name = 'test name';
  const clickFunc = () => {
    alert('Hi Wife');
  };
  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="group" />
        <Hello name="Kin mập" />
        <Welcome name="Ken mập" />
        <h1>
          Meet the <i style={{ color: 'steelblue' }}>{name}</i>
        </h1>
        <p>
          Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their
          enthusiasm for science, for their love of fun, and their dedication to education.
        </p>
        <Support />
        <ListCast />
      </hgroup>
    </div>
  );
}
export default App;
