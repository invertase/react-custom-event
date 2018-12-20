type CustomEvent<T1, T2> = [T1, T2];

export default function useCustomEvent(event: string): CustomEvent<any,(value?: any) => void>;
