/**
 * CFX:SET_ROPES_CREATE_NETWORK_WORLD_STATE
 *
 * 0XE62FC73

 * Toggles whether the usage of [ADD_ROPE](#_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} shouldCreate Whether to create an underlying network world state
 */
export function setRopesCreateNetworkWorldState(shouldCreate: boolean): void {
	const setRopesCreateNetworkWorldState_result = Citizen.invokeNative<void>('0XE62FC73', shouldCreate);
	return setRopesCreateNetworkWorldState_result;
}