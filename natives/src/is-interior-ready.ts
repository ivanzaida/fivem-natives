import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:IS_INTERIOR_READY
 *
 * 0xD0B0D1BD29678350

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @returns {boolean}  
 */
export function isInteriorReady(interiorInstance: InteriorInstanceIndex): boolean {
	const isInteriorReady_result = Citizen.invokeNative<boolean>('0xD0B0D1BD29678350', interiorInstance);
	return isInteriorReady_result;
}