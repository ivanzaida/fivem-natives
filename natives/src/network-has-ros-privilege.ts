import { ENetworkRosPrivilegeid } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_ROS_PRIVILEGE
 *
 * 0x428539069343758E

 * 
 * index is always 18 in scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ENetworkRosPrivilegeid} privilegeId
 * @returns {boolean}  
 */
export function networkHasRosPrivilege(privilegeId: ENetworkRosPrivilegeid | number): boolean {
	const networkHasRosPrivilege_result = Citizen.invokeNative<boolean>('0x428539069343758E', privilegeId);
	return networkHasRosPrivilege_result;
}