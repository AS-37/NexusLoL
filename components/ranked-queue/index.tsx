const cleanQueueType:any = {
    "RANKED_SOLO_5x5": "Ranked Solo",
    "RANKED_FLEX_SR": " Ranked Flex 5v5"
};

export default function RankedQueue(props:any) {
    const data = props.data

    if (data == undefined){
        return null;
    }

    let cleanedUpTier = data.tier.charAt(0) + data.tier.substring(1).toLowerCase()

    return (
        <div className={props.className + " text-gray-500 text-xs table-cell border-2 p-5 pr-20"}>
            {data.queueType === "RANKED_SOLO_5x5" ? (
                <img width="80px" height="80px" src={`/images/ranks/${data.tier.toLowerCase()}.png`} />
            ) : (
                <img width="80px" height="80px" src={`/images/ranks/${data.tier.toLowerCase()}.png`} />
            )}
            <div className="text-xs">{cleanQueueType[data.queueType]}</div>
            <div className="text-sm text-blue-500 font-bold">{cleanedUpTier} {data.rank}</div>
            <div className="text-gray-600">{`${data.leaguePoints} LP`}<span className="text-gray-500">{` / ${data.wins}W ${data.losses}L`}</span></div>
            <div>{`Win Ratio ${Math.round((data.wins / (data.wins + data.losses)) * 100)}%`}</div>
        </div>
    )
}