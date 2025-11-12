/**
 * VEHICLE:SET_ENABLE_VEHICLE_SLIPSTREAMING
 *
 * 0x312DFD78768FEAA0

 * 
 * Enable/Disables global slipstream physics
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enableSlipstreaming
 */
export function setEnableVehicleSlipstreaming(enableSlipstreaming: boolean): void {
	const setEnableVehicleSlipstreaming_result = Citizen.invokeNative<void>('0x312DFD78768FEAA0', enableSlipstreaming);
	return setEnableVehicleSlipstreaming_result;
}