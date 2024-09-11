/**
 * VEHICLE:NETWORK_ENABLE_EMPTY_CROWDING_VEHICLES_REMOVAL
 *
 * 0x71052C5B6562E5BD

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enableThisFrame
 */
export function networkEnableEmptyCrowdingVehiclesRemoval(enableThisFrame: boolean): void {
	const networkEnableEmptyCrowdingVehiclesRemoval_result = Citizen.invokeNative<void>('0x71052C5B6562E5BD', enableThisFrame);
	return networkEnableEmptyCrowdingVehiclesRemoval_result;
}