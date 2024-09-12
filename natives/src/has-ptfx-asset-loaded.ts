/**
 * STREAMING:HAS_PTFX_ASSET_LOADED
 *
 * 0x6F13318788EDDAD8

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasPtfxAssetLoaded(): boolean {
	const hasPtfxAssetLoaded_result = Citizen.invokeNative<boolean>('0x6F13318788EDDAD8', );
	return hasPtfxAssetLoaded_result;
}