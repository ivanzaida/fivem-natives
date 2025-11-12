import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ENVEFF_SCALE
 *
 * 0x4DC7FAAC148F9B2F

 * 
 * The parameter fade is a value from 0-1, where 0 is fresh paint.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} scale
 */
export function setVehicleEnveffScale(vehicle: VehicleIndex, scale: number): void {
	const setVehicleEnveffScale_result = Citizen.invokeNative<void>('0x4DC7FAAC148F9B2F', vehicle, scale);
	return setVehicleEnveffScale_result;
}