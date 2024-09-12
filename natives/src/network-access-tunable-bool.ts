/**
 * NETWORK:NETWORK_ACCESS_TUNABLE_BOOL
 *
 * 0x3DB3B2BA3A150EF2

 * 
 * ------------------------------------------------------------------
 * @param {string} szContext
 * @param {string} szTunableName
 * @returns {boolean}  
 */
export function networkAccessTunableBool(szContext: string, szTunableName: string): boolean {
	const networkAccessTunableBool_result = Citizen.invokeNative<boolean>('0x3DB3B2BA3A150EF2', szContext, szTunableName);
	return networkAccessTunableBool_result;
}