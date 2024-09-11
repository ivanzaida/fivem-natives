/**
 * MOBILE:CELL_CAM_SET_SELFIE_MODE_HORZ_PAN_OFFSET
 *
 * 0xCF33DB366A4071FB

 * 
 * ------------------------------------------------------------------
 * @param {number} scaling
 */
export function cellCamSetSelfieModeHorzPanOffset(scaling: number): void {
	const cellCamSetSelfieModeHorzPanOffset_result = Citizen.invokeNative<void>('0xCF33DB366A4071FB', scaling);
	return cellCamSetSelfieModeHorzPanOffset_result;
}