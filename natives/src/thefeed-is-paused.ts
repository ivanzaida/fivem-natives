/**
 * HUD:THEFEED_IS_PAUSED
 *
 * 0xBB7AD75D26AF0143

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function thefeedIsPaused(): boolean {
	const thefeedIsPaused_result = Citizen.invokeNative<boolean>('0xBB7AD75D26AF0143', );
	return thefeedIsPaused_result;
}