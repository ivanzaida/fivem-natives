import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:IS_INTERIOR_CAPPED
 *
 * 0x79D5985D0CE1880C

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @returns {boolean}  
 */
export function isInteriorCapped(interiorInstance: InteriorInstanceIndex): boolean {
	const isInteriorCapped_result = Citizen.invokeNative<boolean>('0x79D5985D0CE1880C', interiorInstance);
	return isInteriorCapped_result;
}