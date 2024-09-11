import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MOTION_BLUR
 *
 * 0xD4109F723B3DF74F

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} index
 * @param {boolean} motionBlur
 */
export function setPedMotionBlur(index: PedIndex, motionBlur: boolean): void {
	const setPedMotionBlur_result = Citizen.invokeNative<void>('0xD4109F723B3DF74F', index, motionBlur);
	return setPedMotionBlur_result;
}