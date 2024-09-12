/**
 * HUD:RESET_GLOBAL_ACTIONSCRIPT_FLAG
 *
 * 0x2DD8C72847DFACDF

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 */
export function resetGlobalActionscriptFlag(index: number): void {
	const resetGlobalActionscriptFlag_result = Citizen.invokeNative<void>('0x2DD8C72847DFACDF', index);
	return resetGlobalActionscriptFlag_result;
}