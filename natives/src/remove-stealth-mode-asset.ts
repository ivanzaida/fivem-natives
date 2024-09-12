/**
 * PED:REMOVE_STEALTH_MODE_ASSET
 *
 * 0xC2B66CA01C228D6C

 * 
 * ------------------------------------------------------------------
 * @param {string} stealthMode
 */
export function removeStealthModeAsset(stealthMode: string): void {
	const removeStealthModeAsset_result = Citizen.invokeNative<void>('0xC2B66CA01C228D6C', stealthMode);
	return removeStealthModeAsset_result;
}