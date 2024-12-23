import { useState } from "react"
import {useNavigate} from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleClick = ()=>{
        navigate('/pagina-inicial')
    }
    return(
        <div>
            <form>
                <label>
                    <span> Email </span>
                    <input type="text" value={email} onChange={e =>setEmail(e.target.value)}/>
                </label>
                <label>
                    <span> Senha </span>
                    <input type="password" value={senha} onChange={e =>setSenha(e.target.value)}/>
                </label>
            </form>
            <button onClick={handleClick}>Pagina Inicial</button>
        </div>
      
    )
}