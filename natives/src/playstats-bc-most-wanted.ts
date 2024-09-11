import { BcMostWanted } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BC_MOST_WANTED
 *
 * 0x3FCF9BCA6FB938F2

 * 
 * ------------------------------------------------------------------
 * @param {BcMostWanted} data [Ref]
 */
export function playstatsBcMostWanted(data: BcMostWanted /* ptr */): void {
	const playstatsBcMostWanted_result = Citizen.invokeNative<void>('0x3FCF9BCA6FB938F2', data.dataView);
	return playstatsBcMostWanted_result;
}