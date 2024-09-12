import { Leaderboard2ReadData, GamerHandle } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_READ_BY_RADIUS
 *
 * 0x15A7798AEEFAC562

 * 
 * ------------------------------------------------------------------
 * @param {Leaderboard2ReadData} lbData [Ref]
 * @param {number} radius
 * @param {GamerHandle} pivotGamerHandle [Ref]
 * @returns {boolean}  
 */
export function leaderboards2ReadByRadius(lbData: Leaderboard2ReadData /* ptr */, radius: number, pivotGamerHandle: GamerHandle /* ptr */): boolean {
	const leaderboards2ReadByRadius_result = Citizen.invokeNative<boolean>('0x15A7798AEEFAC562', lbData.dataView, radius, pivotGamerHandle.dataView);
	return leaderboards2ReadByRadius_result;
}