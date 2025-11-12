import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ALLOW_NO_PASSENGERS_LOCKON
 *
 * 0x730536B32F041BA6

 * 
 * Makes the vehicle accept no passengers.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} allowLockon
 */
export function setVehicleAllowNoPassengersLockon(vehicle: VehicleIndex, allowLockon: boolean): void {
	const setVehicleAllowNoPassengersLockon_result = Citizen.invokeNative<void>('0x730536B32F041BA6', vehicle, allowLockon);
	return setVehicleAllowNoPassengersLockon_result;
}