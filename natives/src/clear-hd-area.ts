/**
 * STREAMING:CLEAR_HD_AREA
 *
 * 0x6C086599D0704F9E

 * 
 * ------------------------------------------------------------------
 */
export function clearHdArea(): void {
	const clearHdArea_result = Citizen.invokeNative<void>('0x6C086599D0704F9E', );
	return clearHdArea_result;
}