import { EPrivilegeCheck } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAVE_COMMUNICATION_PRIVILEGES
 *
 * 0x9A9677D7F3615A86

 * 
 * ------------------------------------------------------------------
 * @param {EPrivilegeCheck} privilegeType
 * @param {number} player
 * @returns {boolean}  
 */
export function networkHaveCommunicationPrivileges(privilegeType: EPrivilegeCheck | number = 0, player: number = 1): boolean {
	const networkHaveCommunicationPrivileges_result = Citizen.invokeNative<boolean>('0x9A9677D7F3615A86', privilegeType, player);
	return networkHaveCommunicationPrivileges_result;
}