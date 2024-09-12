import { VehicleIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:MOVE_VEHICLE_DECALS
 *
 * 0xC1FEB5766814FAB4

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicleFrom
 * @param {VehicleIndex} vehicleTo
 */
export function moveVehicleDecals(vehicleFrom: VehicleIndex, vehicleTo: VehicleIndex): void {
	const moveVehicleDecals_result = Citizen.invokeNative<void>('0xC1FEB5766814FAB4', vehicleFrom, vehicleTo);
	return moveVehicleDecals_result;
}