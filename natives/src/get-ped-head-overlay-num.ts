/**
 * PED:GET_PED_HEAD_OVERLAY_NUM
 *
 * 0x6D19BF3A83702C49

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {number}  
 */
export function getPedHeadOverlayNum(slot: number): number {
	const getPedHeadOverlayNum_result = Citizen.invokeNative<number>('0x6D19BF3A83702C49', slot);
	return getPedHeadOverlayNum_result;
}