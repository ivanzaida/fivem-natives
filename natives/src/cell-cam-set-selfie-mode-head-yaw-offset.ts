/**
 * MOBILE:CELL_CAM_SET_SELFIE_MODE_HEAD_YAW_OFFSET
 *
 * 0x48BDE4C1BEB65AD4

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 */
export function cellCamSetSelfieModeHeadYawOffset(offset: number): void {
	const cellCamSetSelfieModeHeadYawOffset_result = Citizen.invokeNative<void>('0x48BDE4C1BEB65AD4', offset);
	return cellCamSetSelfieModeHeadYawOffset_result;
}