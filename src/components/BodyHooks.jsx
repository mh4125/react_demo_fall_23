import React, {useEffect, useState} from 'react';

function BodyHooks(count3){
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(10)

    //this hook only runs at load time
    //useEffect(()
    //      console.log(count)
    // }, [])

    useEffect(()=> {
        console.log(count)
    },[count])

    useEffect(()=> {
        console.log(count2)
    },[count2])

    return(
        <>
            <button type="button" className="btn btn-primary" onClick={() => {setCount(count + 1)}}>
                {count}
            </button>
            <button type="button" className="btn btn-primary" onClick={() => {setCount2(count2 + 10)}}>
                {count2}
            </button>
        </>
    )
}

export default BodyHooks