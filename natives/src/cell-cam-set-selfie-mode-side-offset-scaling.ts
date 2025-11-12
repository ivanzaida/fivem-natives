/**
 * MOBILE:CELL_CAM_SET_SELFIE_MODE_SIDE_OFFSET_SCALING
 *
 * 0xD974CD3A050559FE

 * 
 * Sets the desired scaling to be applied to the side offset of the third-person cell phone camera, in selfie mode only. This offset is damped prior to being applied.
 * This allows the selfie framing to be customised and for cropping to be minimised.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scaling
 */
export function cellCamSetSelfieModeSideOffsetScaling(scaling: number): void {
	const cellCamSetSelfieModeSideOffsetScaling_result = Citizen.invokeNative<void>('0xD974CD3A050559FE', scaling);
	return cellCamSetSelfieModeSideOffsetScaling_result;
}