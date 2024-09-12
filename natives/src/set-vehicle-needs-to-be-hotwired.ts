import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_NEEDS_TO_BE_HOTWIRED
 *
 * 0x2165BE2A3E719A31

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} newVal
 */
export function setVehicleNeedsToBeHotwired(vehicle: VehicleIndex, newVal: boolean): void {
	const setVehicleNeedsToBeHotwired_result = Citizen.invokeNative<void>('0x2165BE2A3E719A31', vehicle, newVal);
	return setVehicleNeedsToBeHotwired_result;
}