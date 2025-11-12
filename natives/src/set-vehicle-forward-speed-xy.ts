import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_FORWARD_SPEED_XY
 *
 * 0xFF4296DC08BAEC71

 * 
 * Seems to be identical to SET_VEHICLE_FORWARD_SPEED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} carSpeed
 */
export function setVehicleForwardSpeedXy(vehicle: VehicleIndex, carSpeed: number): void {
	const setVehicleForwardSpeedXy_result = Citizen.invokeNative<void>('0xFF4296DC08BAEC71', vehicle, carSpeed);
	return setVehicleForwardSpeedXy_result;
}