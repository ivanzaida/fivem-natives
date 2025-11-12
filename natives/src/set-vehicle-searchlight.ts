import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_SEARCHLIGHT
 *
 * 0x130DC0384195C42E

 * 
 * Only works during nighttime.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} on
 * @param {boolean} alwaysOn Will guarantee that headlight will not turn off UNLESS THE FOLLOWING OCCURS
 */
export function setVehicleSearchlight(vehicle: VehicleIndex, on: boolean, alwaysOn: boolean = false): void {
	const setVehicleSearchlight_result = Citizen.invokeNative<void>('0x130DC0384195C42E', vehicle, on, alwaysOn);
	return setVehicleSearchlight_result;
}