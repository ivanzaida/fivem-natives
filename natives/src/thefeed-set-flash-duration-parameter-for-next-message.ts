/**
 * HUD:THEFEED_SET_FLASH_DURATION_PARAMETER_FOR_NEXT_MESSAGE
 *
 * 0xF96D051DEBF38D64

 * 
 * Related to notification color flashing, setting count to 0 invalidates a `THEFEED_SET_RGBA_PARAMETER_FOR_NEXT_MESSAGE` call for the target notification.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} flashDuration
 */
export function thefeedSetFlashDurationParameterForNextMessage(flashDuration: number): void {
	const thefeedSetFlashDurationParameterForNextMessage_result = Citizen.invokeNative<void>('0xF96D051DEBF38D64', flashDuration);
	return thefeedSetFlashDurationParameterForNextMessage_result;
}