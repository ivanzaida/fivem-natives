import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_VISUAL_FIELD_MAX_ELEVATION_ANGLE
 *
 * 0xD1DDDDB8B108DF01

 * 
 * This native refers to the field of vision the ped has above them, starting at 0 degrees. 90f would let the ped see enemies directly above of them.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} angle
 */
export function setPedVisualFieldMaxElevationAngle(ped: PedIndex, angle: number): void {
	const setPedVisualFieldMaxElevationAngle_result = Citizen.invokeNative<void>('0xD1DDDDB8B108DF01', ped, angle);
	return setPedVisualFieldMaxElevationAngle_result;
}