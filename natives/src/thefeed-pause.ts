/**
 * HUD:THEFEED_PAUSE
 *
 * 0x5C6622EF2CEA902F

 * 
 * ------------------------------------------------------------------
 */
export function thefeedPause(): void {
	const thefeedPause_result = Citizen.invokeNative<void>('0x5C6622EF2CEA902F', );
	return thefeedPause_result;
}