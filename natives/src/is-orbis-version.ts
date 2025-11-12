/**
 * MISC:IS_ORBIS_VERSION
 *
 * 0x3B880DE16766E9C3

 * 
 * PS4
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isOrbisVersion(): boolean {
	const isOrbisVersion_result = Citizen.invokeNative<boolean>('0x3B880DE16766E9C3', );
	return isOrbisVersion_result;
}