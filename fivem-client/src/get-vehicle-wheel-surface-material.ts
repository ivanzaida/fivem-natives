import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_SURFACE_MATERIAL
 *
 * 0XA7F04022

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @param {number} wheelIndex Index of wheel, 03.
 * @returns {number}  Integer representing the index of the current surface material of that wheel. Check materials.dat for the indexes.
 */
export function getVehicleWheelSurfaceMaterial(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelSurfaceMaterial_result = Citizen.invokeNative<number>('0XA7F04022', vehicle, wheelIndex);
	return getVehicleWheelSurfaceMaterial_result;
}