import { VehicleIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * VEHICLE:CAN_SHUFFLE_SEAT
 *
 * 0x2955FC7A22330E7F

 * 
 * Command to check if a ped could shuffle from this seat. This is a bit expensive,
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EVehicleSeat} seat
 * @returns {boolean}  
 */
export function canShuffleSeat(vehicle: VehicleIndex, seat: EVehicleSeat | number): boolean {
	const canShuffleSeat_result = Citizen.invokeNative<boolean>('0x2955FC7A22330E7F', vehicle, seat);
	return canShuffleSeat_result;
}