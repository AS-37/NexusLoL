import { RiotAPI } from '@fightmegg/riot-api';
import { PlatformId } from '@fightmegg/riot-rate-limiter';
import { match } from 'assert';
import riotAPI from '../../../lib/riot-api'

export default async function GetMatchHistory(data:any) {
    if (data.puuid == null) {
       return null;
    }

    let region:any = PlatformId.EUROPE;
    let matchList:any = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${data.puuid}/ids?start=0&count=20&api_key=${RiotAPI}`, {
        method: 'GET',
    });
    let data_matchList:any = await matchList.json()
    console.log(data_matchList)

    let match = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchList[0]}?api_key=${RiotAPI}`, {
        method: 'GET',
    });
    let data_match = await match.json()

    console.log(matchList);
    console.log(data_match)
}  