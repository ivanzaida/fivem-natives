/**
 * HUD:THEFEED_SET_VIBRATE_PARAMETER_FOR_NEXT_MESSAGE
 *
 * 0x4ECB46EDAD7EA53D

 * 
 * ------------------------------------------------------------------
 * @param {boolean} vibrate
 */
export function thefeedSetVibrateParameterForNextMessage(vibrate: boolean): void {
	const thefeedSetVibrateParameterForNextMessage_result = Citizen.invokeNative<void>('0x4ECB46EDAD7EA53D', vibrate);
	return thefeedSetVibrateParameterForNextMessage_result;
}