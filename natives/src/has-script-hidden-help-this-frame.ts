/**
 * HUD:HAS_SCRIPT_HIDDEN_HELP_THIS_FRAME
 *
 * 0x89817276E6872917

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasScriptHiddenHelpThisFrame(): boolean {
	const hasScriptHiddenHelpThisFrame_result = Citizen.invokeNative<boolean>('0x89817276E6872917', );
	return hasScriptHiddenHelpThisFrame_result;
}