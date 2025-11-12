import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_EXTRA
 *
 * 0xD772F6AA66750D2B

 * 
 * Available extraIds are 1-14, however none of the vehicles have extras above 12.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} extra
 * @param {boolean} turnOff
 */
export function setVehicleExtra(vehicle: VehicleIndex, extra: number, turnOff: boolean): void {
	const setVehicleExtra_result = Citizen.invokeNative<void>('0xD772F6AA66750D2B', vehicle, extra, turnOff);
	return setVehicleExtra_result;
}