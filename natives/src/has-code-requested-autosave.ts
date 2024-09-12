/**
 * MISC:HAS_CODE_REQUESTED_AUTOSAVE
 *
 * 0x9F4AE9BED29CAFA0

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasCodeRequestedAutosave(): boolean {
	const hasCodeRequestedAutosave_result = Citizen.invokeNative<boolean>('0x9F4AE9BED29CAFA0', );
	return hasCodeRequestedAutosave_result;
}