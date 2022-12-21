import { db } from "../firebase";
import {
    collection,
    query,
    orderBy,
    limit,
    onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import React from "react";

const Ranking = (props) => {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const rankingCollection = collection(db, "ranking");
            const rankQuery = query(
                rankingCollection,
                orderBy("time"),
                limit(5)
            );

            onSnapshot(rankQuery, (snapshot) => {
                setRanking(
                    snapshot.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
            });
        };

        fetchData();
    }, []);

    return (
        <div className="ranking">
            <div>Ranking</div>
            <div className="ranking-grid">
                <div className="rank-header">#</div>
                <div className="rank-header">Name</div>
                <div className="rank-header">Time</div>
                <div className="rank-header">Wrong</div>
                {ranking.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="ranking-item">{index + 1}</div>
                            <div className="ranking-item">{item.name}</div>
                            <div className="ranking-item">
                                <span>
                                    {("0" + Math.floor(item.time / 3600)).slice(
                                        -2
                                    )}
                                    :
                                </span>
                                <span>
                                    {(
                                        "0" +
                                        (Math.floor(item.time / 60) % 60)
                                    ).slice(-2)}
                                    :
                                </span>
                                <span>
                                    {("0" + (item.time % 60)).slice(-2)}
                                </span>
                            </div>
                            <div className="ranking-item">{item.wrong}</div>
                        </React.Fragment>
                    );
                })}
            </div>
            <button className="ranking-close" onClick={props.closeRanking}>
                Close Ranking
            </button>
        </div>
    );
};

export default Ranking;
