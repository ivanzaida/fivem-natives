/**
 * PED:HAS_STEALTH_MODE_ASSET_LOADED
 *
 * 0xD3FF790CDA1D2927

 * 
 * ------------------------------------------------------------------
 * @param {string} stealthMode
 * @returns {boolean}  
 */
export function hasStealthModeAssetLoaded(stealthMode: string): boolean {
	const hasStealthModeAssetLoaded_result = Citizen.invokeNative<boolean>('0xD3FF790CDA1D2927', stealthMode);
	return hasStealthModeAssetLoaded_result;
}