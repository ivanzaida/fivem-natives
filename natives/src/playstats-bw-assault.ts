import { BwAssault } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BW_ASSAULT
 *
 * 0x9ADE63CF2AA5FA61

 * 
 * ------------------------------------------------------------------
 * @param {BwAssault} data [Ref]
 */
export function playstatsBwAssault(data: BwAssault /* ptr */): void {
	const playstatsBwAssault_result = Citizen.invokeNative<void>('0x9ADE63CF2AA5FA61', data.dataView);
	return playstatsBwAssault_result;
}