/**
 * MOBILE:CELL_CAM_SET_SELFIE_MODE_HEAD_PITCH_OFFSET
 *
 * 0xFA6A3ED1D3AA4BD4

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 */
export function cellCamSetSelfieModeHeadPitchOffset(offset: number): void {
	const cellCamSetSelfieModeHeadPitchOffset_result = Citizen.invokeNative<void>('0xFA6A3ED1D3AA4BD4', offset);
	return cellCamSetSelfieModeHeadPitchOffset_result;
}