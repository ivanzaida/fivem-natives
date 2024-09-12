/**
 * HUD:CLEAR_SMALL_PRINTS
 *
 * 0xFFD79EDD25B8EC72

 * 
 * ------------------------------------------------------------------
 */
export function clearSmallPrints(): void {
	const clearSmallPrints_result = Citizen.invokeNative<void>('0xFFD79EDD25B8EC72', );
	return clearSmallPrints_result;
}