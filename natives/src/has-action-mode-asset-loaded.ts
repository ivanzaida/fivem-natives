/**
 * PED:HAS_ACTION_MODE_ASSET_LOADED
 *
 * 0x2B3F2546A5C7ED4F

 * 
 * ------------------------------------------------------------------
 * @param {string} actionMode
 * @returns {boolean}  
 */
export function hasActionModeAssetLoaded(actionMode: string): boolean {
	const hasActionModeAssetLoaded_result = Citizen.invokeNative<boolean>('0x2B3F2546A5C7ED4F', actionMode);
	return hasActionModeAssetLoaded_result;
}