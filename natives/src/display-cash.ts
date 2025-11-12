/**
 * HUD:DISPLAY_CASH
 *
 * 0xC940FB68F75D37B9

 * 
 * "DISPLAY_CASH(false);" makes the cash amount render on the screen when appropriate
 * "DISPLAY_CASH(true);" disables cash amount rendering
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} value
 */
export function displayCash(value: boolean): void {
	const displayCash_result = Citizen.invokeNative<void>('0xC940FB68F75D37B9', value);
	return displayCash_result;
}