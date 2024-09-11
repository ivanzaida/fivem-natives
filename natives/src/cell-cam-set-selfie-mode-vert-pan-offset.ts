/**
 * MOBILE:CELL_CAM_SET_SELFIE_MODE_VERT_PAN_OFFSET
 *
 * 0x289AEE012C9C5F5D

 * 
 * ------------------------------------------------------------------
 * @param {number} scaling
 */
export function cellCamSetSelfieModeVertPanOffset(scaling: number): void {
	const cellCamSetSelfieModeVertPanOffset_result = Citizen.invokeNative<void>('0x289AEE012C9C5F5D', scaling);
	return cellCamSetSelfieModeVertPanOffset_result;
}