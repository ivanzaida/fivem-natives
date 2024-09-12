import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_NETWORK_INCREMENT_ON_SUICIDE
 *
 * 0x4BE1DC2DE96B1199

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {number} value
 */
export function statNetworkIncrementOnSuicide(keyHash: EStatsenum | number, value: number): void {
	const statNetworkIncrementOnSuicide_result = Citizen.invokeNative<void>('0x4BE1DC2DE96B1199', keyHash, value);
	return statNetworkIncrementOnSuicide_result;
}