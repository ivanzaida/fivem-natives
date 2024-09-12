import { VehicleIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IN_VEHICLE_CLIPSET_HASH_FOR_SEAT
 *
 * 0xD9DD012396E375D8

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EVehicleSeat} seat
 * @returns {number}  
 */
export function getInVehicleClipsetHashForSeat(vehicle: VehicleIndex, seat: EVehicleSeat | number): number {
	const getInVehicleClipsetHashForSeat_result = Citizen.invokeNative<number>('0xD9DD012396E375D8', vehicle, seat);
	return getInVehicleClipsetHashForSeat_result;
}