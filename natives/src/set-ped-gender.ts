import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_PED_GENDER
 *
 * 0xCE8A758C0ADD192B

 * 
 * BOOL p1: 0 = Female; 1 = Male
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} isMale
 */
export function setPedGender(ped: PedIndex, isMale: boolean): void {
	const setPedGender_result = Citizen.invokeNative<void>('0xCE8A758C0ADD192B', ped, isMale);
	return setPedGender_result;
}