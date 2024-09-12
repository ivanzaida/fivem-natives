/**
 * CFX:REMOVE_DRY_VOLUME
 *
 * 0x7BCAA6E7

 * Removes a dry volume from the game session.See CREATE_DRY_VOLUME for more info
 * 
 * ------------------------------------------------------------------
 * @param {number} handle The handle of the dry volume that needs to be removed.
 */
export function removeDryVolume(handle: number): void {
	const removeDryVolume_result = Citizen.invokeNative<void>('0x7BCAA6E7', handle);
	return removeDryVolume_result;
}