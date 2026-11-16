import { useEffect, useRef } from "react";

const areEqual = (prevDeps, nextDeps) => {
    if (prevDeps === null) return false;

    if (prevDeps.length != nextDeps.length) return false;

    for (let i = 0; i < prevDeps.length; i++) {
        if (prevDeps[i] != nextDeps[i]) {
            return false;
        }
    }

    return true;
}

const useCustomMemo = (cb, deps) => {

    //variable or state change --> Cached Value

    const memoizedRef = useRef(null);
    //Changes in dependencies

    if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
        memoizedRef.current = {
            value: cb(),
            deps
        }
    }
    //Cleanup Logic

    useEffect(() => {
        return () => {
            memoizedRef.current = null;
        }
    }, [])
    //return a memoized value (if any)

    return memoizedRef.current.value;
}

export default useCustomMemo;