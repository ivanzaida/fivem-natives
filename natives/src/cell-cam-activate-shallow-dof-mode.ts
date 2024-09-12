/**
 * MOBILE:CELL_CAM_ACTIVATE_SHALLOW_DOF_MODE
 *
 * 0x20B0BCFBA94C4732

 * 
 * ------------------------------------------------------------------
 * @param {boolean} shouldActivate
 */
export function cellCamActivateShallowDofMode(shouldActivate: boolean): void {
	const cellCamActivateShallowDofMode_result = Citizen.invokeNative<void>('0x20B0BCFBA94C4732', shouldActivate);
	return cellCamActivateShallowDofMode_result;
}