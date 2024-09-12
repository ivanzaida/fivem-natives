/**
 * MOBILE:CELL_CAM_SET_SELFIE_MODE_DISTANCE_SCALING
 *
 * 0x6DE386DA26D363D5

 * 
 * ------------------------------------------------------------------
 * @param {number} scaling
 */
export function cellCamSetSelfieModeDistanceScaling(scaling: number): void {
	const cellCamSetSelfieModeDistanceScaling_result = Citizen.invokeNative<void>('0x6DE386DA26D363D5', scaling);
	return cellCamSetSelfieModeDistanceScaling_result;
}