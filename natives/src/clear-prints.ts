/**
 * HUD:CLEAR_PRINTS
 *
 * 0x406CBCEA35499884

 * 
 * Handy if a lot of text is about to be printed by you whilst there still is some unimportant stuff left.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearPrints(): void {
	const clearPrints_result = Citizen.invokeNative<void>('0x406CBCEA35499884', );
	return clearPrints_result;
}