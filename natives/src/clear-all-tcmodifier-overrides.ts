/**
 * GRAPHICS:CLEAR_ALL_TCMODIFIER_OVERRIDES
 *
 * 0x96EB2A3044CE3688

 * 
 * ------------------------------------------------------------------
 * @param {string} modifier
 */
export function clearAllTcmodifierOverrides(modifier: string): void {
	const clearAllTcmodifierOverrides_result = Citizen.invokeNative<void>('0x96EB2A3044CE3688', modifier);
	return clearAllTcmodifierOverrides_result;
}