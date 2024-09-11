/**
 * AUDIO:CLEAR_ALL_BROKEN_GLASS
 *
 * 0xC22A1D86EFB5A8CA

 * 
 * ------------------------------------------------------------------
 */
export function clearAllBrokenGlass(): void {
	const clearAllBrokenGlass_result = Citizen.invokeNative<void>('0xC22A1D86EFB5A8CA', );
	return clearAllBrokenGlass_result;
}