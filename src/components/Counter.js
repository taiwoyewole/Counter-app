import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counter'
import classes from './Counter.module.css'

const Counter = () =>
{
	const dispatch = useDispatch()
	const counter = useSelector((state) => state.counter.counter)
	const showCounter = useSelector((state) => state.counter.showCounter)
	const isAuth = useSelector(state => state.auth.isAuthenticated)

	const incrementHandler = () =>
	{
		dispatch(counterActions.increment())
	}

	const increaseHandler = () =>
	{
		dispatch(counterActions.increase(5))
	}

	const decrementHandler = () =>
	{
		dispatch(counterActions.decrement())
	}

	const toggleCounterHandler = () =>
	{
		dispatch(counterActions.toggleCounter())
	}

	return (
	<>
		{ isAuth && <main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase By 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
			</main>}
			</>
	)
}

export default Counter
