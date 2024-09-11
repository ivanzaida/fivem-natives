import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_VISUAL_FIELD_CENTER_ANGLE
 *
 * 0x70101B2986BB6AB2

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedVisualFieldCenterAngle(ped: PedIndex): number {
	const getPedVisualFieldCenterAngle_result = Citizen.invokeNative<number>('0x70101B2986BB6AB2', ped);
	return getPedVisualFieldCenterAngle_result;
}