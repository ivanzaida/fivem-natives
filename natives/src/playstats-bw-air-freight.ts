import { BwAirfreight } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BW_AIR_FREIGHT
 *
 * 0xF3621FB07D69B631

 * 
 * ------------------------------------------------------------------
 * @param {BwAirfreight} data [Ref]
 */
export function playstatsBwAirFreight(data: BwAirfreight /* ptr */): void {
	const playstatsBwAirFreight_result = Citizen.invokeNative<void>('0xF3621FB07D69B631', data.dataView);
	return playstatsBwAirFreight_result;
}