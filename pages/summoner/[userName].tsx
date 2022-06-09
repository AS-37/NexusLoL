import RankedQueue from '../../components/ranked-queue';
import DetailMatch from '../../components/list_history/list_history';
import { server } from '../../config'
import GetMatchHistory from '../api/summoner/match-history';

export default function Summoner({ data }:any) {

    if (!data || data.error) {
        return (
            <div>
                Not found
            </div>
        )
    }
    //MatchHistory(data);
    //GetMatchHistory(data)

    const cleanQueueType: any = {
        "RANKED_SOLO_5x5": "Ranked Solo",
        "RANKED_FLEX_SR": "Flex 5v5"
    };
    
    return (
        <div className="pt-4">
            <div className="relative mx-auto pl-20" style={{width: "1000px"}}>
                <div className="inline-block w-24 align-top">
                    <img className="rounded-full" src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/${data.icon}.png`} />
                    <div className="text-xl text-yellow-300 text-center">{data.summonerLevel}</div>
                </div>
                <div className="relative inline-block pl-5">
                    <div className="text-xl font-semibold align-middle mr-5 pt-8">{data.name}</div>
                </div>
            </div>
            <div className="flex text-gray-500 pl-10">
                <button className="border-gray-200 border-2 w-24">Summary</button>
            </div>
            <div className="border-t-2 pl-10">
        
                    <div className="pt-2 float-left mr-8">
                    <RankedQueue data={data.solo} /> 
                    <RankedQueue data={data.flex} />
                    </div>
                    <div className="pt-2 float-left pl-4 align-middle">
                    <DetailMatch data={data} ind={0} />
                    <DetailMatch data={data} ind={1} />
                    <DetailMatch data={data} ind={2} />
                    <DetailMatch data={data} ind={3} />
                    <DetailMatch data={data} ind={4} />
                    <DetailMatch data={data} ind={5} />
                    <DetailMatch data={data} ind={6} />
                    <DetailMatch data={data} ind={7} />
                    <DetailMatch data={data} ind={8} />
                    <DetailMatch data={data} ind={9} />
                    </div>
                </div>
            </div>
            
        
    )
    
}

export async function getServerSideProps(context:any) {
    const res_info = await fetch(`${server}/api/summoner/info`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            region: "euw1",
            username: context.params.userName
        })
    });

    if (!res_info.ok) {
        return {
            props: {
                error: true
            }
        }
    }

    let data = await res_info.json()

    if (!data) {
        return {
            props: {
                error: true
            }
        }
    }

    console.log(data)
    //Summoner(data);
    return {
        props: { data },
    }
}

