// Basic Syntax
//  useEffect(callbackFunction, [dependency1, dependency2])

//example: 
const SomeComponent = () => {
    useEffect(() => {
        setTimeout(peaceOnEarth, 10000000);
    });

    return (
        <div>
            ...
        </div>
    );
};
//Note: without dependencies array as the second argument (10000000) to useEffect, the effect in the first argument (peaceOnEarth) callback Function will run everytime the component renders which can overload and break the browser

// A common useful way to use dependency array is to simply pass and empty array as the second argument to useEffect this will let the react know to run the side effect ONLY ONCE example:
const SomeComponent2 = () => {
    useEffect(() => {
        setTimeout(peaceOnEarth, 10000000);
    } []);

    return (
        <div>
            ...
        </div>
    );
};
// You can also set the useEffect to run only when a specific variable is updated, by adding the veriable to the dependency like this: 
const SomeComponent3 = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setTimeout(peaceOnEarth, 2000);
    } [toggle]);

    return (
        <div>
            <button onclick={() => setToggle(true)}>Click for peace on earth</button>
        </div>
    );
};

//Cleaning up effect

useEffect(() => {
    //do something
    return (
        //clean something up
    );
});

//Example: 

const SomeComponent4 = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        let peace;
        if (toggle) {
            peace = setTimeout((peaceOnEarth, 2000);
        }
        return () => {
            clearTimeout(peace);
        };
    }, [toggle]);

    return (
        <button onclick={() => setToggle(true)}>Click for peace on earth</button>
    );
};
