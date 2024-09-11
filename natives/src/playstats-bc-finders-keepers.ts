import { BcFindersKeepers } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BC_FINDERS_KEEPERS
 *
 * 0x719970758F252DBF

 * 
 * ------------------------------------------------------------------
 * @param {BcFindersKeepers} data [Ref]
 */
export function playstatsBcFindersKeepers(data: BcFindersKeepers /* ptr */): void {
	const playstatsBcFindersKeepers_result = Citizen.invokeNative<void>('0x719970758F252DBF', data.dataView);
	return playstatsBcFindersKeepers_result;
}