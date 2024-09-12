import { BcSmashAndGrab } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BC_SMASH_AND_GRAB
 *
 * 0xE71905B28E3F819A

 * 
 * ------------------------------------------------------------------
 * @param {BcSmashAndGrab} data [Ref]
 */
export function playstatsBcSmashAndGrab(data: BcSmashAndGrab /* ptr */): void {
	const playstatsBcSmashAndGrab_result = Citizen.invokeNative<void>('0xE71905B28E3F819A', data.dataView);
	return playstatsBcSmashAndGrab_result;
}