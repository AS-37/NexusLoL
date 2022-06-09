import { RiotAPI, RiotAPITypes } from '@fightmegg/riot-api';
import { PlatformId } from '@fightmegg/riot-rate-limiter';
import riotAPI from '../../../lib/riot-api'

const leagueEntry = {
    rank: "",
    wins: 0,
    losses: 0,
    tier: "",
    leaguePoints: 0
};

let region2:any = PlatformId.EUROPE;
RiotAPITypes
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

    let summonerDTO = await riotAPI.summoner.getBySummonerName({
        region: PlatformId.EUW1,
        summonerName: `${req.body.username}`,
    });

    let leagueEntryDTO = await riotAPI.league.getEntriesBySummonerId({
        region: PlatformId.EUW1,
        summonerId: summonerDTO.id
    });
    let region:any = PlatformId.EUROPE;
    
console.log(summonerDTO.puuid)

    let matchList:any = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerDTO.puuid}/ids?api_key=${riotAPI.token}`, {
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
        return element.puuid == summonerDTO.puuid;
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
        summonerLevel: summonerDTO.summonerLevel,
        name: summonerDTO.name,
        icon: summonerDTO.profileIconId,
        puuid: summonerDTO.puuid,
        solo: leagueEntryDTO[0],
        flex: leagueEntryDTO[1],
        matches: tableaux_matches
    };

    console.log(tableaux_matches)
    console.log(resp.matches[0].ChampionJoueur)
    console.log(resp.matches[0].match_participants[0].Player)
    res.status(200).json(resp)
    //console.log(resp)
}  