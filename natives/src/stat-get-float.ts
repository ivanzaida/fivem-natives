import { EStatsenum, FloatRef } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_FLOAT
 *
 * 0x2F0966A034F5ADC6

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {FloatRef} data [Ref]
 * @param {number} player
 * @returns {boolean}  
 */
export function statGetFloat(keyHash: EStatsenum | number, data: FloatRef /* ptr */, player: number = 1): boolean {
	const statGetFloat_result = Citizen.invokeNative<boolean>('0x2F0966A034F5ADC6', keyHash, data.dataView, player);
	return statGetFloat_result;
}