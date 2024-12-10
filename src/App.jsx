import { useState } from 'react';
import Button from './components/button/Button';

const App = () => {
	const [counter, setCounter] = useState(0);
	const [incrementValue, setIncrementValue] = useState(1);

	return (
		<>
			<h1>{counter}</h1>
			<p>Counter Settings</p>
			<Button action={() => decrement(counter, setCounter, incrementValue)}>
				-{incrementValue}
			</Button>
			<Button action={() => reset(setCounter)}>Reset</Button>
			<Button action={() => increment(counter, setCounter, incrementValue)}>
				+{incrementValue}
			</Button>
			<p>Increment Settings (+{incrementValue})</p>
			<Button
				action={() => incrementValueUp(incrementValue, setIncrementValue)}
			>
				+1
			</Button>
			<Button action={() => resetIncrementValue(setIncrementValue)}>
				Reset
			</Button>
		</>
	);
};

const increment = (counter, setCounter, incrementValue) => {
	setCounter(counter + incrementValue);
};

const decrement = (counter, setCounter, incrementValue) => {
	setCounter(counter - incrementValue);
};

const reset = setCounter => {
	setCounter(0);
};

const incrementValueUp = (incrementValue, setIncrementValue) => {
	setIncrementValue(incrementValue + 1);
};

const resetIncrementValue = setIncrementValue => {
	setIncrementValue(1);
};

export default App;
