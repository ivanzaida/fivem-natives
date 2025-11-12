import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:SET_INTERIOR_IN_USE
 *
 * 0x75E4D52830820775

 * 
 * Only used once in the entire game scripts.
 * Does not actually return anything.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @returns {boolean}  
 */
export function setInteriorInUse(interiorInstance: InteriorInstanceIndex): boolean {
	const setInteriorInUse_result = Citizen.invokeNative<boolean>('0x75E4D52830820775', interiorInstance);
	return setInteriorInUse_result;
}