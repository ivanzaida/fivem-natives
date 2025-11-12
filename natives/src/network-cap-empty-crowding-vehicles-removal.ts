/**
 * VEHICLE:NETWORK_CAP_EMPTY_CROWDING_VEHICLES_REMOVAL
 *
 * 0xA4109B4CEC071346

 * 
 * Default:1000||This sets a value which is used when NETWORK_ENABLE_EMPTY_CROWDING_VEHICLES_REMOVAL(true) is called each frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} capNum
 */
export function networkCapEmptyCrowdingVehiclesRemoval(capNum: number): void {
	const networkCapEmptyCrowdingVehiclesRemoval_result = Citizen.invokeNative<void>('0xA4109B4CEC071346', capNum);
	return networkCapEmptyCrowdingVehiclesRemoval_result;
}