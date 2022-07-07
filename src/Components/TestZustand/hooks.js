import { useStore } from "zustand";

const useZustandFacade = () => {
    const {isLoading, success, error} = useStore(state => state.value);
    
}