import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_FACE_FEATURE
 *
 * 0XBA352ADD

 * A getter for [_SET_PED_FACE_FEATURE](#_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} index Face feature index
 * @returns {number}  Returns ped's face feature value, or 0.0 if fails to get.
 */
export function getPedFaceFeature(ped: PedIndex, index: number): number {
	const getPedFaceFeature_result = Citizen.invokeNative<number>('0XBA352ADD', ped, index);
	return getPedFaceFeature_result;
}