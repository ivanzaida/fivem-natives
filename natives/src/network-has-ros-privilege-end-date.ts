import { ENetworkRosPrivilegeid, IntRef, UgcDate } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_ROS_PRIVILEGE_END_DATE
 *
 * 0x20DACABA7023B608

 * 
 * ------------------------------------------------------------------
 * @param {ENetworkRosPrivilegeid} privilegeId
 * @param {IntRef} isGranted [Ref]
 * @param {UgcDate} date [Ref]
 * @returns {boolean}  
 */
export function networkHasRosPrivilegeEndDate(privilegeId: ENetworkRosPrivilegeid | number, isGranted: IntRef /* ptr */, date: UgcDate /* ptr */): boolean {
	const networkHasRosPrivilegeEndDate_result = Citizen.invokeNative<boolean>('0x20DACABA7023B608', privilegeId, isGranted.dataView, date.dataView);
	return networkHasRosPrivilegeEndDate_result;
}