/**
 * PED:REQUEST_STEALTH_MODE_ASSET
 *
 * 0x56943E0C3826FD0D

 * 
 * Used to prevent delays for missions peds getting in stealth mode, forcing stealth mode
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} stealthMode
 */
export function requestStealthModeAsset(stealthMode: string): void {
	const requestStealthModeAsset_result = Citizen.invokeNative<void>('0x56943E0C3826FD0D', stealthMode);
	return requestStealthModeAsset_result;
}