import { BwBellyOfTheBeast } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BW_BELLY_OF_THE_BEAST
 *
 * 0x14C70C346E2865FB

 * 
 * ------------------------------------------------------------------
 * @param {BwBellyOfTheBeast} data [Ref]
 */
export function playstatsBwBellyOfTheBeast(data: BwBellyOfTheBeast /* ptr */): void {
	const playstatsBwBellyOfTheBeast_result = Citizen.invokeNative<void>('0x14C70C346E2865FB', data.dataView);
	return playstatsBwBellyOfTheBeast_result;
}