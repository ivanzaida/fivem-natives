import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CLEAR_VEHICLE_PETROLTANK_FIRE_CULPRIT
 *
 * 0x60D610F2649E805B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function clearVehiclePetroltankFireCulprit(vehicle: VehicleIndex): void {
	const clearVehiclePetroltankFireCulprit_result = Citizen.invokeNative<void>('0x60D610F2649E805B', vehicle);
	return clearVehiclePetroltankFireCulprit_result;
}