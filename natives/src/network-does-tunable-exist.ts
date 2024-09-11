/**
 * NETWORK:NETWORK_DOES_TUNABLE_EXIST
 *
 * 0x1E8E83ADEA1A71BE

 * 
 * ------------------------------------------------------------------
 * @param {string} szContext
 * @param {string} szTunableName
 * @returns {boolean}  
 */
export function networkDoesTunableExist(szContext: string, szTunableName: string): boolean {
	const networkDoesTunableExist_result = Citizen.invokeNative<boolean>('0x1E8E83ADEA1A71BE', szContext, szTunableName);
	return networkDoesTunableExist_result;
}