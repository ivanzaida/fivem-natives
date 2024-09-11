import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_VISUAL_FIELD_MIN_ANGLE
 *
 * 0x3C7306C2CE967C57

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} angle
 */
export function setPedVisualFieldMinAngle(ped: PedIndex, angle: number): void {
	const setPedVisualFieldMinAngle_result = Citizen.invokeNative<void>('0x3C7306C2CE967C57', ped, angle);
	return setPedVisualFieldMinAngle_result;
}