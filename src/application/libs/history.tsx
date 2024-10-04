import { useCallback } from "react";
import { NavigateOptions, To, useNavigate } from "react-router-dom"
import { INavigate } from "../interfaces/INavigate";

// hook personalizado
export const useHistory = (): INavigate => {
    const navigateHook = useNavigate();

    // ele é um hook que guarda nossa funcao em memoria para evitar rerender desnecessário
    const goBack = useCallback(() => {
        navigateHook(-1);
    }, [navigateHook]);

    const goNext = useCallback(() => {
        navigateHook(1);
    }, [navigateHook]);

    const navigate = useCallback((to: To, options?: NavigateOptions) => {
        navigateHook(to, options);
    }, [navigateHook]);

    return { goBack, goNext, navigate };
}
