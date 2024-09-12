import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_WANTED_CONES_RESPONSE
 *
 * 0xAEC7FB421829031C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setDisableWantedConesResponse(vehicle: VehicleIndex, val: boolean): void {
	const setDisableWantedConesResponse_result = Citizen.invokeNative<void>('0xAEC7FB421829031C', vehicle, val);
	return setDisableWantedConesResponse_result;
}