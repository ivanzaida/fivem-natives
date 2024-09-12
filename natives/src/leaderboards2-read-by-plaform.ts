import { Leaderboard2ReadData } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_BY_PLAFORM
 *
 * 0x86A2F61D43CBFF3E

 * 
 * ------------------------------------------------------------------
 * @param {Leaderboard2ReadData} lbData [Ref]
 * @param {string} gamerHandler
 * @param {string} platform
 * @returns {boolean}  
 */
export function leaderboards2ReadByPlaform(lbData: Leaderboard2ReadData /* ptr */, gamerHandler: string, platform: string): boolean {
	const leaderboards2ReadByPlaform_result = Citizen.invokeNative<boolean>('0x86A2F61D43CBFF3E', lbData.dataView, gamerHandler, platform);
	return leaderboards2ReadByPlaform_result;
}