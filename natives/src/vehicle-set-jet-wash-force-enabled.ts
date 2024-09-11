/**
 * VEHICLE:VEHICLE_SET_JET_WASH_FORCE_ENABLED
 *
 * 0x528A16ECF4B7B5A6

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function vehicleSetJetWashForceEnabled(enable: boolean): void {
	const vehicleSetJetWashForceEnabled_result = Citizen.invokeNative<void>('0x528A16ECF4B7B5A6', enable);
	return vehicleSetJetWashForceEnabled_result;
}