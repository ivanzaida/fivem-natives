/**
 * MOBILE:CELL_CAM_SET_SELFIE_MODE_ROLL_OFFSET
 *
 * 0x263FA094C828FD3E

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 */
export function cellCamSetSelfieModeRollOffset(offset: number): void {
	const cellCamSetSelfieModeRollOffset_result = Citizen.invokeNative<void>('0x263FA094C828FD3E', offset);
	return cellCamSetSelfieModeRollOffset_result;
}