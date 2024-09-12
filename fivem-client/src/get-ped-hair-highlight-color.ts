import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_HAIR_HIGHLIGHT_COLOR
 *
 * 0X4B087305

 * A getter for [_SET_PED_HAIR_COLOR](#_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @returns {number}  Returns ped's secondary hair colour.
 */
export function getPedHairHighlightColor(ped: PedIndex): number {
	const getPedHairHighlightColor_result = Citizen.invokeNative<number>('0X4B087305', ped);
	return getPedHairHighlightColor_result;
}