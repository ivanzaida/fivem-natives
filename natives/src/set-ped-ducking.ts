import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DUCKING
 *
 * 0xD0B00571D4BDDC97

 * 
 * make sure that SET_PED_ALLOWED_TO_DUCK is set true
 * 
 * This is the SET_CHAR_DUCKING from GTA IV, that makes Peds duck. This function does nothing in GTA V. It cannot set the ped as ducking in vehicles, and IS_PED_DUCKING will always return false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} duck
 */
export function setPedDucking(ped: PedIndex, duck: boolean): void {
	const setPedDucking_result = Citizen.invokeNative<void>('0xD0B00571D4BDDC97', ped, duck);
	return setPedDucking_result;
}