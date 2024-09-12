/**
 * MOBILE:CELL_CAM_ACTIVATE_SELFIE_MODE
 *
 * 0x9764C9C63439A2D9

 * 
 * ------------------------------------------------------------------
 * @param {boolean} shouldActivate
 */
export function cellCamActivateSelfieMode(shouldActivate: boolean): void {
	const cellCamActivateSelfieMode_result = Citizen.invokeNative<void>('0x9764C9C63439A2D9', shouldActivate);
	return cellCamActivateSelfieMode_result;
}