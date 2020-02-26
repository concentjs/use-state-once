
type Dispatch<A> = (value: A) => void;

type SetStateAction<S> = S | ((prevState: S) => S);

function useStateOnce<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]

declare let defaultExport: typeof useStateOnce;

export default defaultExport;