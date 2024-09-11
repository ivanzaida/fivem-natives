/**
 * STREAMING:HAS_NAMED_PTFX_ASSET_LOADED
 *
 * 0x939D49C9FAA8139A

 * 
 * ------------------------------------------------------------------
 * @param {string} ptFxAssetName
 * @returns {boolean}  
 */
export function hasNamedPtfxAssetLoaded(ptFxAssetName: string): boolean {
	const hasNamedPtfxAssetLoaded_result = Citizen.invokeNative<boolean>('0x939D49C9FAA8139A', ptFxAssetName);
	return hasNamedPtfxAssetLoaded_result;
}