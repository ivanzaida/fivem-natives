import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_LAST_DRIVEN_VEHICLE
 *
 * 0xC9BBB26582F3058A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setLastDrivenVehicle(vehicle: VehicleIndex): void {
	const setLastDrivenVehicle_result = Citizen.invokeNative<void>('0xC9BBB26582F3058A', vehicle);
	return setLastDrivenVehicle_result;
}