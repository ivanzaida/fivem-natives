import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_VISUAL_FIELD_CENTER_ANGLE
 *
 * 0xA6102F762BBA9BC9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} angle
 */
export function setPedVisualFieldCenterAngle(ped: PedIndex, angle: number): void {
	const setPedVisualFieldCenterAngle_result = Citizen.invokeNative<void>('0xA6102F762BBA9BC9', ped, angle);
	return setPedVisualFieldCenterAngle_result;
}