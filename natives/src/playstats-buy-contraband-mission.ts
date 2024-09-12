import { BuyContrabandMission } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BUY_CONTRABAND_MISSION
 *
 * 0x630EFF47222F5E1D

 * 
 * ------------------------------------------------------------------
 * @param {BuyContrabandMission} data [Ref]
 */
export function playstatsBuyContrabandMission(data: BuyContrabandMission /* ptr */): void {
	const playstatsBuyContrabandMission_result = Citizen.invokeNative<void>('0x630EFF47222F5E1D', data.dataView);
	return playstatsBuyContrabandMission_result;
}