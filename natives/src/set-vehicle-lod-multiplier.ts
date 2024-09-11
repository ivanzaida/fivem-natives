import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_LOD_MULTIPLIER
 *
 * 0xB344489A3C5FFBBB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} multiplier
 */
export function setVehicleLodMultiplier(vehicle: VehicleIndex, multiplier: number): void {
	const setVehicleLodMultiplier_result = Citizen.invokeNative<void>('0xB344489A3C5FFBBB', vehicle, multiplier);
	return setVehicleLodMultiplier_result;
}