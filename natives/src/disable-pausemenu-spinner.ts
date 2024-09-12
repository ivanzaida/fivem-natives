/**
 * HUD:DISABLE_PAUSEMENU_SPINNER
 *
 * 0x5E174DAD9D215609

 * 
 * ------------------------------------------------------------------
 * @param {boolean} disable
 */
export function disablePausemenuSpinner(disable: boolean): void {
	const disablePausemenuSpinner_result = Citizen.invokeNative<void>('0x5E174DAD9D215609', disable);
	return disablePausemenuSpinner_result;
}