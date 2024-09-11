import { BusinessBattleEnded } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BUSINESS_BATTLE_ENDED
 *
 * 0x9F37D3068C21188B

 * 
 * ------------------------------------------------------------------
 * @param {BusinessBattleEnded} data [Ref]
 */
export function playstatsBusinessBattleEnded(data: BusinessBattleEnded /* ptr */): void {
	const playstatsBusinessBattleEnded_result = Citizen.invokeNative<void>('0x9F37D3068C21188B', data.dataView);
	return playstatsBusinessBattleEnded_result;
}