import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
    return (
        <div>         
            <SkeletonTheme color="grey" highlightColor="#444" >
                <Skeleton height={172.58} width={306.8} count={1} />
            </SkeletonTheme>

            <SkeletonTheme  color="grey" highlightColor="#444">   
                <Skeleton circle height={40} width={40} count={1}/>
            </SkeletonTheme>

            <SkeletonTheme  color="grey" highlightColor="#444">
                <Skeleton  height={43.2} width={306.8} count={1} />
            </SkeletonTheme>

            
            <SkeletonTheme  color="grey" highlightColor="#444">
                <Skeleton  height={18.4} width={29.99} count={1} />
            </SkeletonTheme>

            <SkeletonTheme  color="grey" highlightColor="#444">
                <Skeleton  height={21.6} width={306.8} count={1} />
            </SkeletonTheme>
            <br></br>
            <br></br>

        </div>
    )
}

export default SkeletonCard
