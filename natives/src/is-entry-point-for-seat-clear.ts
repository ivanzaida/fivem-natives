import { PedIndex, VehicleIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_ENTRY_POINT_FOR_SEAT_CLEAR
 *
 * 0x848DE0A81098ECCB

 * 
 * Command to check if the direct access entry point for a seat is clear (ped can enter/exit). This is quite expensive,
 * So don't call it too often!
 * 
 * Check if a vehicle seat is accessible. If you park your vehicle near a wall and the ped cannot enter/exit this side, the return value toggles from true (not blocked) to false (blocked).
 * 
 * seatIndex  = -1 being the driver seat.
 * Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.
 * side = only relevant for bikes/motorcycles to check if the left (false)/right (true) side is blocked.
 * onEnter = check if you can enter (true) or exit (false) a vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {EVehicleSeat} seat
 * @param {boolean} checkSide
 * @param {boolean} leftSide
 * @returns {boolean}  
 */
export function isEntryPointForSeatClear(ped: PedIndex, vehicle: VehicleIndex, seat: EVehicleSeat | number, checkSide: boolean = false, leftSide: boolean = false): boolean {
	const isEntryPointForSeatClear_result = Citizen.invokeNative<boolean>('0x848DE0A81098ECCB', ped, vehicle, seat, checkSide, leftSide);
	return isEntryPointForSeatClear_result;
}