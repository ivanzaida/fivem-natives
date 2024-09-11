import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:GET_INTERIOR_HEADING
 *
 * 0xB70C73407E942734

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @returns {number}  
 */
export function getInteriorHeading(interiorInstance: InteriorInstanceIndex): number {
	const getInteriorHeading_result = Citizen.invokeNative<number>('0xB70C73407E942734', interiorInstance);
	return getInteriorHeading_result;
}