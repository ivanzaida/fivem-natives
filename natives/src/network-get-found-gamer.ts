import { GamerInfo } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_FOUND_GAMER
 *
 * 0x9A791B1482F74599

 * 
 * ------------------------------------------------------------------
 * @param {GamerInfo} info [Ref]
 * @param {number} index
 * @returns {boolean}  
 */
export function networkGetFoundGamer(info: GamerInfo /* ptr */, index: number): boolean {
	const networkGetFoundGamer_result = Citizen.invokeNative<boolean>('0x9A791B1482F74599', info.dataView, index);
	return networkGetFoundGamer_result;
}