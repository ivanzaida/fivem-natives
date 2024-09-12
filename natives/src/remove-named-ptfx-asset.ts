/**
 * STREAMING:REMOVE_NAMED_PTFX_ASSET
 *
 * 0x90D778E278B533C0

 * 
 * ------------------------------------------------------------------
 * @param {string} ptFxAssetName
 */
export function removeNamedPtfxAsset(ptFxAssetName: string): void {
	const removeNamedPtfxAsset_result = Citizen.invokeNative<void>('0x90D778E278B533C0', ptFxAssetName);
	return removeNamedPtfxAsset_result;
}