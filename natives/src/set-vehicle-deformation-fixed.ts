import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DEFORMATION_FIXED
 *
 * 0x1D1124C855316790

 * 
 * Fixes deformation damages only, scratch, health and broken part will stay broken
 * 
 * This fixes the deformation of a vehicle but the vehicle health doesn't improve
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setVehicleDeformationFixed(vehicle: VehicleIndex): void {
	const setVehicleDeformationFixed_result = Citizen.invokeNative<void>('0x1D1124C855316790', vehicle);
	return setVehicleDeformationFixed_result;
}