/**
 * HUD:SHOW_ACCOUNT_PICKER
 *
 * 0x030E65C89EF1E38C

 * 
 * ------------------------------------------------------------------
 */
export function showAccountPicker(): void {
	const showAccountPicker_result = Citizen.invokeNative<void>('0x030E65C89EF1E38C', );
	return showAccountPicker_result;
}