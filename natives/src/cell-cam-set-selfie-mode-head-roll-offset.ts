/**
 * MOBILE:CELL_CAM_SET_SELFIE_MODE_HEAD_ROLL_OFFSET
 *
 * 0xDEC275C3811D6AD8

 * 
 * ------------------------------------------------------------------
 * @param {number} offset
 */
export function cellCamSetSelfieModeHeadRollOffset(offset: number): void {
	const cellCamSetSelfieModeHeadRollOffset_result = Citizen.invokeNative<void>('0xDEC275C3811D6AD8', offset);
	return cellCamSetSelfieModeHeadRollOffset_result;
}