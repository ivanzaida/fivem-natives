/**
 * HUD:CLEAR_BRIEF
 *
 * 0x3FE29AE9C01FA3C2

 * 
 * ------------------------------------------------------------------
 */
export function clearBrief(): void {
	const clearBrief_result = Citizen.invokeNative<void>('0x3FE29AE9C01FA3C2', );
	return clearBrief_result;
}