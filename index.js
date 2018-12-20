function useCustomEvent(event) {
    const [value, updateValue] = useState(undefined);

    function onEvent({ detail }) {
        updateValue(detail);
    }

    useEffect(() => {
        window.addEventListener(event, onEvent);
        return () => window.removeEventListener(event, onEvent);
    });

    return [
        value,
        (detail) => {
            window.dispatchEvent(new CustomEvent(event, {
                detail,
            }));
        },
    ];
}

module.exports = useCustomEvent;
