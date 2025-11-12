import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_VISUAL_FIELD_MIN_ELEVATION_ANGLE
 *
 * 0xA5D7DCF7BE7B181D

 * 
 * This native refers to the field of vision the ped has below them, starting at 0 degrees. The angle value should be negative.
 * -90f should let the ped see 90 degrees below them, for example.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} angle
 */
export function setPedVisualFieldMinElevationAngle(ped: PedIndex, angle: number): void {
	const setPedVisualFieldMinElevationAngle_result = Citizen.invokeNative<void>('0xA5D7DCF7BE7B181D', ped, angle);
	return setPedVisualFieldMinElevationAngle_result;
}