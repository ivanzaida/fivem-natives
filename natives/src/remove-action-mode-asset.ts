/**
 * PED:REMOVE_ACTION_MODE_ASSET
 *
 * 0xDBE717677A78CC44

 * 
 * ------------------------------------------------------------------
 * @param {string} actionMode
 */
export function removeActionModeAsset(actionMode: string): void {
	const removeActionModeAsset_result = Citizen.invokeNative<void>('0xDBE717677A78CC44', actionMode);
	return removeActionModeAsset_result;
}