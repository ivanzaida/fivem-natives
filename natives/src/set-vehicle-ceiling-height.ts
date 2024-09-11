import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CEILING_HEIGHT
 *
 * 0x5F7FDF6769E8DD84

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} ceilingHeight
 */
export function setVehicleCeilingHeight(vehicle: VehicleIndex, ceilingHeight: number): void {
	const setVehicleCeilingHeight_result = Citizen.invokeNative<void>('0x5F7FDF6769E8DD84', vehicle, ceilingHeight);
	return setVehicleCeilingHeight_result;
}