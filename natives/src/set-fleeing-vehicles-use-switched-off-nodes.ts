/**
 * VEHICLE:SET_FLEEING_VEHICLES_USE_SWITCHED_OFF_NODES
 *
 * 0xEB13A0B02F8676C8

 * 
 * ------------------------------------------------------------------
 * @param {boolean} canUseSwitchedOffNodes
 */
export function setFleeingVehiclesUseSwitchedOffNodes(canUseSwitchedOffNodes: boolean): void {
	const setFleeingVehiclesUseSwitchedOffNodes_result = Citizen.invokeNative<void>('0xEB13A0B02F8676C8', canUseSwitchedOffNodes);
	return setFleeingVehiclesUseSwitchedOffNodes_result;
}