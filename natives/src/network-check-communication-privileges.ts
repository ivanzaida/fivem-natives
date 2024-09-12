import { EPrivilegeCheck } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CHECK_COMMUNICATION_PRIVILEGES
 *
 * 0x521B8DE052C56837

 * 
 * ------------------------------------------------------------------
 * @param {EPrivilegeCheck} privilegeType
 * @param {number} gamer
 * @param {boolean} checkHasPrivilege
 * @returns {boolean}  
 */
export function networkCheckCommunicationPrivileges(privilegeType: EPrivilegeCheck | number = 0, gamer: number = 1, checkHasPrivilege: boolean = true): boolean {
	const networkCheckCommunicationPrivileges_result = Citizen.invokeNative<boolean>('0x521B8DE052C56837', privilegeType, gamer, checkHasPrivilege);
	return networkCheckCommunicationPrivileges_result;
}