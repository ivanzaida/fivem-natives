import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:IS_INTERIOR_DISABLED
 *
 * 0xE849FB3A0C73A0D9

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @returns {boolean}  
 */
export function isInteriorDisabled(interiorInstance: InteriorInstanceIndex): boolean {
	const isInteriorDisabled_result = Citizen.invokeNative<boolean>('0xE849FB3A0C73A0D9', interiorInstance);
	return isInteriorDisabled_result;
}