import { Link } from "react-router-dom"
export function NotFound() {
    return (
        <>
            <div className="row text-center">
                <div className="col-12">
                    <h2>404</h2>
                    <h4>I'm sorry but that page was not found!!!</h4>
                    <p>
                        You can access the home:
                        <Link to="/" >Home</Link>
                    </p>
                </div>
            </div>
        </>
    )
} 
