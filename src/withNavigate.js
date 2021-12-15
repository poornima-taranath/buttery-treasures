import { useNavigate } from "react-router"

function withNavigate(Comp) {
    return function EnhancedComponent(props) {
        let navigate= useNavigate() //returns a function
        return <Comp {...props} navigate={navigate}/>     
    }
}

export default withNavigate