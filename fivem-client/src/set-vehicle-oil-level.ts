import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_OIL_LEVEL
 *
 * 0X90D1CAD1

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} level
 */
export function setVehicleOilLevel(vehicle: VehicleIndex, level: number): void {
	const setVehicleOilLevel_result = Citizen.invokeNative<void>('0X90D1CAD1', vehicle, level);
	return setVehicleOilLevel_result;
}