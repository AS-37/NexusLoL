import queues from '..//../public/queues.json'

export default function DetailMatch(props:any) {
    const data = props.data

    if (data == undefined){
        return null;
    }
    let color:string =""
    let result:string=""
    if(data.matches[props.ind].Win==true){
        color="green"
        result="VICTORY"
    }
    else {
        color="red"
        result="DEFEAT"
    }
    ``
    let queueid = data.matches[props.ind].gamemode
    let gametype

    let i=0

    for(i = 0; i < queues.length; i++) {
        if(data.matches[props.ind].gamemode == queues[i].queueId){
        gametype=queues[i].description
        }
    }

    

    return (
        <div className="">
        <div className={props.className + ` bg-${color}-400 text-gray-500 text-xs table-cell border-2 p-3 w-`}>
            <div className="float-left pr-16">
            <img className ="w-16 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].ChampionJoueur}.png`}/>
            <div className="text-sm text-black font-bold mt-2">{gametype}</div>
            <div className="text-base text-white font-bold mt-2 ">{data.matches[props.ind].KDA}</div>
            <div className={`text-${color}-900 text-sm font-bold`}>{result} </div>
            </div>
            <div className="text-sm text-black float-right">
            <div className="flex items-center mt-4 pr-4">
            <div className="text-sm text-black">{data.matches[props.ind].match_participants[5].Player}</div>
            <img className ="w-6 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].match_participants[5].PlayerChampion}.png`}/></div>
            <div className="flex items-center mt-4 pr-4">
            <div className="text-sm text-black">{data.matches[props.ind].match_participants[6].Player}</div>
            <img className ="w-6 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].match_participants[6].PlayerChampion}.png`}/></div>
            <div className="flex items-center mt-4 pr-4">
            <div className="text-sm text-black">{data.matches[props.ind].match_participants[7].Player}</div>
            <img className ="w-6 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].match_participants[7].PlayerChampion}.png`}/></div>
            <div className="flex items-center mt-4 pr-4">
            <div className="text-sm text-black">{data.matches[props.ind].match_participants[8].Player}</div>
            <img className ="w-6 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].match_participants[8].PlayerChampion}.png`}/></div>
            <div className="flex items-center mt-4 pr-4">
            <div className="text-sm text-black">{data.matches[props.ind].match_participants[9].Player}</div>
            <img className ="w-6 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].match_participants[9].PlayerChampion}.png`}/></div>
            
            </div>
            <div className="text-sm text-black float-right pr-10">
            <div className="flex items-center mt-4 pr-4">
            <img className ="w-6 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].match_participants[0].PlayerChampion}.png`}/>
            <div className="text-sm text-black">{data.matches[props.ind].match_participants[0].Player}</div></div>
            <div className="flex items-center mt-4 pr-4">
            <img className ="w-6 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].match_participants[1].PlayerChampion}.png`}/>
            <div className="text-sm text-black">{data.matches[props.ind].match_participants[1].Player}</div></div>
            <div className="flex items-center mt-4 pr-4">
            <img className ="w-6 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].match_participants[2].PlayerChampion}.png`}/>
            <div className="text-sm text-black">{data.matches[props.ind].match_participants[2].Player}</div></div>
            <div className="flex items-center mt-4 pr-4">
            <img className ="w-6 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].match_participants[3].PlayerChampion}.png`}/>
            <div className="text-sm text-black">{data.matches[props.ind].match_participants[3].Player}</div></div>
            <div className="flex items-center mt-4 pr-4">
            <img className ="w-6 rounded-md" src ={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${data.matches[props.ind].match_participants[4].PlayerChampion}.png`}/>
            <div className="text-sm text-black">{data.matches[props.ind].match_participants[4].Player}</div></div>
            </div>
        </div>
        </div>
    )
}