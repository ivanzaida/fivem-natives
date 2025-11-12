/**
 * PED:REQUEST_ACTION_MODE_ASSET
 *
 * 0xEC6AB0F95905E8F0

 * 
 * Used to prevent delays for missions peds getting in action mode, forcing action mode
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} actionMode
 */
export function requestActionModeAsset(actionMode: string): void {
	const requestActionModeAsset_result = Citizen.invokeNative<void>('0xEC6AB0F95905E8F0', actionMode);
	return requestActionModeAsset_result;
}