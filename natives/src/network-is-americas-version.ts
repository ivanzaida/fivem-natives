/**
 * NETWORK:_NETWORK_IS_AMERICAS_VERSION
 *
 * 0x0292BD7F3766CEBC

 * 
 * Hardcoded to return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsAmericasVersion(): boolean {
	const networkIsAmericasVersion_result = Citizen.invokeNative<boolean>('0x0292BD7F3766CEBC', );
	return networkIsAmericasVersion_result;
}