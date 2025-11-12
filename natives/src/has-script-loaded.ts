/**
 * SCRIPT:HAS_SCRIPT_LOADED
 *
 * 0xA6E4F7A73ABC4A76

 * 
 * Returns if a script has been loaded into the game. Used to see if a script was loaded after requesting.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scriptname
 * @returns {boolean}  
 */
export function hasScriptLoaded(scriptname: string): boolean {
	const hasScriptLoaded_result = Citizen.invokeNative<boolean>('0xA6E4F7A73ABC4A76', scriptname);
	return hasScriptLoaded_result;
}