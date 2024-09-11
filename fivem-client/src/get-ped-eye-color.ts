import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_EYE_COLOR
 *
 * 0XA47B860F

 * A getter for [_SET_PED_EYE_COLOR](#_0x50B56988B170AFDF). Returns -1 if fails to get.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @returns {number}  Returns ped's eye colour, or -1 if fails to get.
 */
export function getPedEyeColor(ped: PedIndex): number {
	const getPedEyeColor_result = Citizen.invokeNative<number>('0XA47B860F', ped);
	return getPedEyeColor_result;
}