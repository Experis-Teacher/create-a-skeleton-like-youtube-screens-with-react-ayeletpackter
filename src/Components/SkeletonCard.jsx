import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
    return (
        <li className="card">         
            <SkeletonTheme color="grey" highlightColor="#444" >
                <Skeleton height={180} className="card-image" />
                <Skeleton circle height={40} width={40} className="channel-image"  />

            
                <h4 className="card-title">
                    <Skeleton height={45} />
                </h4>

            
                <p className="card-channel">
                    <Skeleton  height={20} width={'10%'} />
                </p>
                <div className="card-metrics">
                    <Skeleton  height={22} width={'50%'}/>  • <Skeleton  height={22} width={'30%'}/>
                </div>
            </SkeletonTheme>
            <br></br>
            <br></br>

        </li>
    )
}

export default SkeletonCard
