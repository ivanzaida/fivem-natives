import { SellContrabandMission } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_SELL_CONTRABAND_MISSION
 *
 * 0xEB54AA925E801335

 * 
 * ------------------------------------------------------------------
 * @param {SellContrabandMission} data [Ref]
 */
export function playstatsSellContrabandMission(data: SellContrabandMission /* ptr */): void {
	const playstatsSellContrabandMission_result = Citizen.invokeNative<void>('0xEB54AA925E801335', data.dataView);
	return playstatsSellContrabandMission_result;
}