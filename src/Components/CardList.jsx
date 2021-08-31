import React from 'react'
import SkeletonCard from "./SkeletonCard";
import Card from './Card';

const CardList = ({list , loading}) => {
    return (
        <ul className="list">
        {list.items.map((item, index) => {
        return loading ? (
          <SkeletonCard key={index} item={item} channel={list.channel} />
        ) : (
          <Card key={index} item={item} channel={list.channel} />
        );
      })}
      </ul>
    )
}

export default CardList
