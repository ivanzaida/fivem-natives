/**
 * HUD:GET_GLOBAL_ACTIONSCRIPT_FLAG
 *
 * 0x9E7C5ECC7DC530D0

 * 
 * Returns the ActionScript flagValue.
 * ActionScript flags are global flags that scaleforms use
 * Flags found during testing
 * 0: Returns 1 if the web_browser keyboard is open, otherwise 0
 * 1: Returns 1 if the player has clicked back twice on the opening page, otherwise 0 (web_browser)
 * 2: Returns how many links the player has clicked in the web_browser scaleform, returns 0 when the browser gets closed
 * 9: Returns the current selection on the mobile phone scaleform
 * 
 * There are 20 flags in total.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {number}  
 */
export function getGlobalActionscriptFlag(index: number): number {
	const getGlobalActionscriptFlag_result = Citizen.invokeNative<number>('0x9E7C5ECC7DC530D0', index);
	return getGlobalActionscriptFlag_result;
}