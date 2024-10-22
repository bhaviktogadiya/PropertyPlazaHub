import { Link, Navigate, useNavigate } from "react-router-dom"

function Header(){
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const handleClick = () => {
        const token = localStorage.getItem("token")
        if (token) {
            localStorage.clear()
            navigate("/")
        } else {
            navigate("/login")
        }
        
        

    }

    return(
        <header>
{/*           
            <button
                style={{float: "right"}}
                onClick={handleClick}
                 
                >{token ? `Logout` : `Login`}</button> */}

            <button className="btn me-3 btn-success " type="submit"
                style={{float: "right",color: 'white', textDecoration: 'none'}}
                onClick={handleClick}>
                {token ? `Logout` : `Login`}
            
            </button>

        </header>
    )
}

export default Header

