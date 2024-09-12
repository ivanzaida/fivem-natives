/**
 * HUD:THEFEED_SET_RGBA_PARAMETER_FOR_NEXT_MESSAGE
 *
 * 0xDE4E5CC177B7051F

 * 
 * ------------------------------------------------------------------
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function thefeedSetRgbaParameterForNextMessage(red: number, green: number, blue: number, alpha: number): void {
	const thefeedSetRgbaParameterForNextMessage_result = Citizen.invokeNative<void>('0xDE4E5CC177B7051F', red, green, blue, alpha);
	return thefeedSetRgbaParameterForNextMessage_result;
}