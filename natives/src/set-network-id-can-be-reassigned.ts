import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_ID_CAN_BE_REASSIGNED
 *
 * 0xF63E001A5DB10361

 * 
 * Sets whether this script object can be reassigned to other machines if the owning player leaves the session.
 * If you are disabling reassignment for an object you should prevent it migrating to other machine normally via
 * calling SET_NETWORK_ID_CAN_MIGRATE(FALSE) first.
 * 
 * "No Reassign" in CPhysicalScriptGameStateDataNode
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} canBeReassigned
 */
export function setNetworkIdCanBeReassigned(networkId: NetworkIndex, canBeReassigned: boolean): void {
	const setNetworkIdCanBeReassigned_result = Citizen.invokeNative<void>('0xF63E001A5DB10361', networkId, canBeReassigned);
	return setNetworkIdCanBeReassigned_result;
}