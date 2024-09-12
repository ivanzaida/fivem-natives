/**
 * NETWORK:NETWORK_CHECK_PRIVILEGES
 *
 * 0x6530C8E06980D65E

 * 
 * ------------------------------------------------------------------
 * @param {number} localGamer
 * @param {number} privilegeTypeBitfield
 * @param {boolean} attempResolution
 * @returns {boolean}  
 */
export function networkCheckPrivileges(localGamer: number, privilegeTypeBitfield: number, attempResolution: boolean): boolean {
	const networkCheckPrivileges_result = Citizen.invokeNative<boolean>('0x6530C8E06980D65E', localGamer, privilegeTypeBitfield, attempResolution);
	return networkCheckPrivileges_result;
}