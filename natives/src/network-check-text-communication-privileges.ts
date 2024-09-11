import { EPrivilegeCheck } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CHECK_TEXT_COMMUNICATION_PRIVILEGES
 *
 * 0xB856D5DB24672EA4

 * 
 * ------------------------------------------------------------------
 * @param {EPrivilegeCheck} privilegeType
 * @param {number} gamer
 * @param {boolean} checkHasPrivilege
 * @returns {boolean}  
 */
export function networkCheckTextCommunicationPrivileges(privilegeType: EPrivilegeCheck | number = 0, gamer: number = 1, checkHasPrivilege: boolean = true): boolean {
	const networkCheckTextCommunicationPrivileges_result = Citizen.invokeNative<boolean>('0xB856D5DB24672EA4', privilegeType, gamer, checkHasPrivilege);
	return networkCheckTextCommunicationPrivileges_result;
}