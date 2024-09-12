import { EPrivilegeCheck } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CHECK_USER_CONTENT_PRIVILEGES
 *
 * 0x8FF2665359043205

 * 
 * ------------------------------------------------------------------
 * @param {EPrivilegeCheck} privilegeType
 * @param {number} gamer
 * @param {boolean} checkHasPrivilege
 * @returns {boolean}  
 */
export function networkCheckUserContentPrivileges(privilegeType: EPrivilegeCheck | number = 0, gamer: number = 1, checkHasPrivilege: boolean = true): boolean {
	const networkCheckUserContentPrivileges_result = Citizen.invokeNative<boolean>('0x8FF2665359043205', privilegeType, gamer, checkHasPrivilege);
	return networkCheckUserContentPrivileges_result;
}