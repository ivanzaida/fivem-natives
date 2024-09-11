import { Leaderboard2ReadData, GamerHandle } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_BY_HANDLE
 *
 * 0xFAFBA6521BA828B9

 * 
 * ------------------------------------------------------------------
 * @param {Leaderboard2ReadData} lbData [Ref]
 * @param {GamerHandle} handleData [Ref]
 * @returns {boolean}  
 */
export function leaderboards2ReadByHandle(lbData: Leaderboard2ReadData /* ptr */, handleData: GamerHandle /* ptr */): boolean {
	const leaderboards2ReadByHandle_result = Citizen.invokeNative<boolean>('0xFAFBA6521BA828B9', lbData.dataView, handleData.dataView);
	return leaderboards2ReadByHandle_result;
}