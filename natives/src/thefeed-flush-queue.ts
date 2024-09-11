/**
 * HUD:THEFEED_FLUSH_QUEUE
 *
 * 0xC138265FD0CDEA4E

 * 
 * ------------------------------------------------------------------
 */
export function thefeedFlushQueue(): void {
	const thefeedFlushQueue_result = Citizen.invokeNative<void>('0xC138265FD0CDEA4E', );
	return thefeedFlushQueue_result;
}