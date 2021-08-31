import React from 'react'
import SkeletonCard from './SkeletonCard';
import '../App.css'
const CardList = ({list}) => {
    console.log(list.items)
    return (
        <ul className="list">
        {list.items.map((item, index) => {
          return <SkeletonCard key={index} item={item} channel={list.channel} />;
        })}
      </ul>
    )
}

export default CardList