import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_HAIR_COLOR
 *
 * 0XA3EA2893

 * A getter for [_SET_PED_HAIR_COLOR](#_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @returns {number}  Returns ped's primary hair colour.
 */
export function getPedHairColor(ped: PedIndex): number {
	const getPedHairColor_result = Citizen.invokeNative<number>('0XA3EA2893', ped);
	return getPedHairColor_result;
}