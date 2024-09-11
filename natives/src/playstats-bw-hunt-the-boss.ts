import { BwHuntTheBoss } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BW_HUNT_THE_BOSS
 *
 * 0x70FD47FAC8200A49

 * 
 * ------------------------------------------------------------------
 * @param {BwHuntTheBoss} data [Ref]
 */
export function playstatsBwHuntTheBoss(data: BwHuntTheBoss /* ptr */): void {
	const playstatsBwHuntTheBoss_result = Citizen.invokeNative<void>('0x70FD47FAC8200A49', data.dataView);
	return playstatsBwHuntTheBoss_result;
}