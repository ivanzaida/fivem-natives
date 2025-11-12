/**
 * STREAMING:DISABLE_SWITCH_OUTRO_FX
 *
 * 0xE48295FCA7404802

 * 
 * Sets the "supress outro FX" flag on an ongoing switch
 * 
 * 
 * ------------------------------------------------------------------
 */
export function disableSwitchOutroFx(): void {
	const disableSwitchOutroFx_result = Citizen.invokeNative<void>('0xE48295FCA7404802', );
	return disableSwitchOutroFx_result;
}