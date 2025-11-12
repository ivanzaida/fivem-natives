/**
 * HUD:HIDE_HELP_TEXT_THIS_FRAME
 *
 * 0x7009D885379C8CDF

 * 
 * Must be called every frame
 * 
 * 
 * ------------------------------------------------------------------
 */
export function hideHelpTextThisFrame(): void {
	const hideHelpTextThisFrame_result = Citizen.invokeNative<void>('0x7009D885379C8CDF', );
	return hideHelpTextThisFrame_result;
}