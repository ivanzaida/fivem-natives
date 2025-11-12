/**
 * VEHICLE:SET_VEHICLE_SHUNT_ON_STICK
 *
 * 0x0BE32015EBE87354

 * 
 * Does nothing. It's a nullsub.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} shuntOnStick
 */
export function setVehicleShuntOnStick(shuntOnStick: boolean): void {
	const setVehicleShuntOnStick_result = Citizen.invokeNative<void>('0x0BE32015EBE87354', shuntOnStick);
	return setVehicleShuntOnStick_result;
}