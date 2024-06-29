import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { decrement, increment , incrementByAmount, incrementAsync} from '../state/counter/counterSlice'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <>
    <h2>{count}</h2>
    <div>
        <button onClick={()=>{dispatch(increment())}}>
            Increment
        </button>
    </div>
    <div>
        <button onClick={()=>{dispatch(decrement())}}>
            Decrement
        </button>
    </div>
    <div>
        <button onClick={()=>{dispatch(incrementByAmount(10))}}>
            Increment By 10
        </button>
    </div>
    <div>
        <button onClick={()=>{dispatch(incrementAsync(10))}}>
            Increment By 10 async
        </button>
    </div>
    </>
  )
}

export default Counter