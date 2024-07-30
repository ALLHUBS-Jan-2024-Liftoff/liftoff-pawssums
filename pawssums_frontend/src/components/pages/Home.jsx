import {Navbar} from '../Navbar'

export const Home = () => {

    return(
        <div>
            <Navbar/>
            <div className="d-grid justify-content-center p-5">
                <div className="bg-light p-3 border rounded m-5">
                    <h1 className="text-center p-2">WILD ENCOUNTERS</h1>
                </div>
                <div className="bg-light p-3 border rounded m-5 p-5">
                <h1 className="text-center border ">MAP</h1>
                </div>
            </div>
        </div>
        
    )
}