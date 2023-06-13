import "./Die.css";

export default function Die(props){
    let style ={
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    function dotsContainer(totalDots){
        let dotStyle;
        if(totalDots === 6){
            dotStyle = (
                <div className="circle6">
                    {dots(totalDots)}
                </div>
            )
        }else if(totalDots === 5){
            dotStyle = (
                <div className="circle5">
                    <div className="top5dot">
                        <div className="dot1 circle-dot"></div>
                        <div className="dot2 circle-dot"></div>
                    </div>
                    <div className="dot3 circle-dot"></div>
                    <div className="bottom5dot">
                        <div className="dot4 circle-dot"></div>
                        <div className="dot5 circle-dot"></div>
                    </div>
                </div>
            )
        }else if(totalDots === 4){
            dotStyle = (
                <div className="circle4">
                    {dots(totalDots)}
                </div>
            )
        }else if(totalDots === 3){
            dotStyle = (
                <div className="circle3">
                    <div className="dot1 circle-dot"></div>
                    <div className="dot2 circle-dot"></div>
                    <div className="dot3 circle-dot"></div>
                </div>
            )
        }else if(totalDots === 2){
            dotStyle = (
                <div className="circle2">
                    <div className="dot1 circle-dot"></div>
                    <div className="dot2 circle-dot"></div>
                 </div>
            )
        }else{
            dotStyle = (
                <div className="circle1">
                    <div className="dot1 circle-dot"></div>
                </div>
            )
        }

       return (dotStyle);
    }

    

    function dots(count){
        const alldots = []
        for(let i = 0; i < count; i++){
            alldots.push(<div className="circle-dot"></div>) 
         }
         return(alldots);
    }

   return (
    <div 
    className='box box-1' 
    style={style}
    onClick={props.updateDice}
    >
        {dotsContainer(props.value)}
    </div>
   )
}