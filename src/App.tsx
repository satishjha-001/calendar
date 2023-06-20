import { Calendar } from './components';


const App = () => {
  return (
    <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto  h-screen items-center sm:flex-row flex-col">
      <Calendar date={"12/12/1995"}/>
    </div>
  );
}

export default App;
