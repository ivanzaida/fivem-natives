import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_HAIR_TINT
 *
 * 0xA23FE32C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The Ped whose hair tint is to be set.
 * @param {number} colorID The tint index for the primary hair color.
 * @param {number} highlightColorID The tint index for the hair highlight color.
 */
export function setPedHairTint(ped: PedIndex, colorID: number, highlightColorID: number): void {
	const setPedHairTint_result = Citizen.invokeNative<void>('0xA23FE32C', ped, colorID, highlightColorID);
	return setPedHairTint_result;
}