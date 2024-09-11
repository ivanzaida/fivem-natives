/**
 * MISC:IS_AUTO_SAVE_IN_PROGRESS
 *
 * 0x46150A5112561134

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isAutoSaveInProgress(): boolean {
	const isAutoSaveInProgress_result = Citizen.invokeNative<boolean>('0x46150A5112561134', );
	return isAutoSaveInProgress_result;
}