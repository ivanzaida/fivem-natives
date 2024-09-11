import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:IS_VALID_INTERIOR
 *
 * 0xF8A8852F99E201DD

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @returns {boolean}  
 */
export function isValidInterior(interiorInstance: InteriorInstanceIndex): boolean {
	const isValidInterior_result = Citizen.invokeNative<boolean>('0xF8A8852F99E201DD', interiorInstance);
	return isValidInterior_result;
}