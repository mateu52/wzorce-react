import { useEffect, useState } from "react";

function useWindowSize(){
    const [ { height, width }, setSize ] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(()=>{
        const hResize = () =>
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        window.addEventListener('resize', hResize);
    },[setSize])

    return {height, width};
};



// class WindowResize extends Component{
//     state= {
//         width: window.innerWidth,
//         height: window.innerHeight
//     };
//     handleResize = () => {
//         this.setState({
//             width: window.innerWidth,
//             height: window.innerHeight
//         });
//     };
//     componentDidMount(){
//         window.addEventListener("resize", this.handleResize);
//     }
//     componentWillUnmount(){
//         window.removeEventListener("resize", this.handleResize);
//     }

//     render(){
//         const { width, height } = this.state
//         return(
//             <h2>
//                 Window size: {width} x {height}
//             </h2>
//         )
//     }
// }
