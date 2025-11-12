/**
 * HUD:THEFEED_RESET_ALL_PARAMETERS
 *
 * 0x17E18CDB962AC915

 * 
 * Defaults all the parameters set with:
 * THEFEED_SET_RGBA_PARAMETER_FOR_NEXT_MESSAGE
 * THEFEED_SET_FLASH_DURATION_PARAMETER_FOR_NEXT_MESSAGE
 * THEFEED_SET_VIBRATE_PARAMETER_FOR_NEXT_MESSAGE
 * 
 * 
 * ------------------------------------------------------------------
 */
export function thefeedResetAllParameters(): void {
	const thefeedResetAllParameters_result = Citizen.invokeNative<void>('0x17E18CDB962AC915', );
	return thefeedResetAllParameters_result;
}