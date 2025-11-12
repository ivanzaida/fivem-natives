import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_PHONE_PALETTE_IDX
 *
 * 0x7CB81DD9FBD57E82

 * 
 * This function sets the palette index of a ped's phone.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} index
 */
export function setPedPhonePaletteIdx(ped: PedIndex, index: number): void {
	const setPedPhonePaletteIdx_result = Citizen.invokeNative<void>('0x7CB81DD9FBD57E82', ped, index);
	return setPedPhonePaletteIdx_result;
}