import { EPrivilegeCheck } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAVE_USER_CONTENT_PRIVILEGES
 *
 * 0x97DD063A9C6137F8

 * 
 * ------------------------------------------------------------------
 * @param {EPrivilegeCheck} privilegeType Privilege Check Type (One of PRIVILEGE_CHECK)
 * @returns {boolean}  
 */
export function networkHaveUserContentPrivileges(privilegeType: EPrivilegeCheck | number = 0): boolean {
	const networkHaveUserContentPrivileges_result = Citizen.invokeNative<boolean>('0x97DD063A9C6137F8', privilegeType);
	return networkHaveUserContentPrivileges_result;
}