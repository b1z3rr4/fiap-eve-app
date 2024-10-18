import { createContext, PropsWithChildren, useReducer } from "react";
import { updatePermission } from "../../application/use-cases/profile/updatePermission";

type InitialProfileContextProps = {
    name: string;
    email: string;
    setName: (value: string) => void;
    permissions: Record<string, boolean>;
}

const initialProfileContext: InitialProfileContextProps = {
    name: '',
    email: '',
    permissions: {},
    setName: () => {},
}

export const ProfileContext = createContext(initialProfileContext);

type ReducerProps = Omit<InitialProfileContextProps, 'setName'>;

const initialReducerValues: ReducerProps = {
    name: '',
    email: '',
    permissions: {},
}

type DispatchTypes = 'updateName' | 'updatePermissions' | 'updateProfile';

type Action = { type: DispatchTypes; payload: unknown };


function reducerProfile(state: ReducerProps, action: Action): ReducerProps {
    switch(action.type) {
        case 'updateName':
            return {
                ...state,
                name: action.payload as string,
            }
        case 'updatePermissions': {
                const newPermissions = updatePermission(action.payload as string[])
                return {
                    ...state,
                    permissions: newPermissions,
                }
            }
        case 'updateProfile': {
            const newPermissions = updatePermission((action.payload as { permissions: string[] }).permissions as string[]);

            return {
                ...action.payload as ReducerProps,
                permissions: newPermissions
            }
        }
        default: 
            return {
                ...state,
            }
    }
}

export const ProfileProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatchState] = useReducer(reducerProfile, initialReducerValues);

    // const [name, setName] = useState('FIAP');

    const setName = (value: string) => {
        dispatchState({
            type: "updateProfile",
            payload: {
                name: value,
                email: `${value}@gmail.com`,
                permissions: ['Editar nome', 'Editar email']
            }
        });
    }

    const values = {
        name: state.name,
        email: '',
        permissions: {},
        setName: setName
    }

    return (
        <ProfileContext.Provider value={values}>
            {children}
        </ProfileContext.Provider>
    )
}