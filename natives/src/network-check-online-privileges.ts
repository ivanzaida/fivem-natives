/**
 * NETWORK:NETWORK_CHECK_ONLINE_PRIVILEGES
 *
 * 0x27AEB178E6BB8021

 * 
 * ------------------------------------------------------------------
 * @param {number} gamer
 * @param {boolean} checkHasPrivilege
 * @returns {boolean}  
 */
export function networkCheckOnlinePrivileges(gamer: number = 1, checkHasPrivilege: boolean = true): boolean {
	const networkCheckOnlinePrivileges_result = Citizen.invokeNative<boolean>('0x27AEB178E6BB8021', gamer, checkHasPrivilege);
	return networkCheckOnlinePrivileges_result;
}