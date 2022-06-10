
import { PlatformId } from '@fightmegg/riot-rate-limiter';
import riotAPI from '../../../lib/riot-api'

const leagueEntry = {
    rank: "",
    wins: 0,
    losses: 0,
    tier: "",
    leaguePoints: 0
};

let region2:any= "europe";

export default async function info(req:any, res:any) {
    if (req.body.username == null) {
        return res.status(400).json({
            error: true,
        });
    }

    if (req.body.region == null) {
        return res.status(400).json({
            error: true,
            message: "Bad request body"
        });
    }

    let summonerDTO = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.body.username}?api_key=${riotAPI.token}`, {
        method: 'GET',
    });

    let info_summoner = await summonerDTO.json();

    console.log(info_summoner);

    let leagueEntryDTO = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${info_summoner.accountId}?api_key=${riotAPI.token}`, {
        method: 'GET',
    });

    let region:any = "europe";

    let info_ranked = await leagueEntryDTO.json()
    
console.log(info_summoner.puuid)

    let matchList:any = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${info_summoner.puuid}/ids?api_key=${riotAPI.token}`, {
        method: 'GET',
    });

    let data_matchList:any = await matchList.json()
    console.log(riotAPI.token)
    console.log(data_matchList)

    /*let i = 0;
    for(i = 0; i < 11; i++) {
        let matchId = matchList[0];

        let match = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchList[i]}?api_key=${RiotAPI}`)
    }*/
    let j=0
    let tableaux_matches = []
    
    for(j=0;j<10;j++){
        data_matchList[j]

    let match = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${data_matchList[j]}?api_key=${riotAPI.token}`, {
        method: 'GET',
    });

    let data_match = await match.json()

    console.log("ICI")
    console.log(data_match)

    const index = data_match.info.participants.findIndex((element: { puuid: string; }) => {
        return element.puuid == info_summoner.puuid;
    });

    //let pos_joueur = data_match.info.participants.findIndex(check(data_match.info.participants))
    let ChampionJoueur = data_match.info.participants[index].championName
    console.log(data_match.info.participants[index].championName)
    let win = data_match.info.participants[index].win
    let KDA = ""+data_match.info.participants[index].kills+"/"+data_match.info.participants[index].deaths+"/"+data_match.info.participants[index].assists
    let gamemode = data_match.info.queueId
    
    console.log(win)
    console.log(KDA)
    console.log(gamemode)

    let match_participants = []
    let i = 0;
    for(i = 0; i < 10; i++) {
        
        let participant = {
            Player: data_match.info.participants[i].summonerName,
            PlayerChampion: data_match.info.participants[i].championName
        }

        match_participants.push(participant)
        
    }

    console.log(match_participants)

    let match_detail = {
        ChampionJoueur: ChampionJoueur,
        Win: win,
        KDA: KDA,
        gamemode: gamemode,
        match_participants: match_participants
    }

    tableaux_matches.push(match_detail)

    }

    let resp = {
        summonerLevel: info_summoner.summonerLevel,
        name: info_summoner.name,
        icon: info_summoner.profileIconId,
        puuid: info_summoner.puuid,
        solo: info_ranked[0],
        flex: info_ranked[1],
        matches: tableaux_matches
    };

    console.log(info_ranked)
    console.log(resp)
    console.log(resp.matches[0].match_participants[0].Player)
    res.status(200).json(resp)
    //console.log(resp)
}  