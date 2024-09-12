import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_VISUAL_FIELD_MAX_ANGLE
 *
 * 0xC8DEC2468E748263

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} angle
 */
export function setPedVisualFieldMaxAngle(ped: PedIndex, angle: number): void {
	const setPedVisualFieldMaxAngle_result = Citizen.invokeNative<void>('0xC8DEC2468E748263', ped, angle);
	return setPedVisualFieldMaxAngle_result;
}