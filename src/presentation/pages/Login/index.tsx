import { useContext } from "react"
import { ProfileContext } from "../../contexts/ProfileContext"

export function Login() {
    const { name } = useContext(ProfileContext);

    return (
        <div>
            <h1>Bem vindo(a) ao Login {name}!</h1>
        </div>
    )
}
