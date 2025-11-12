import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_INTO_VEHICLE
 *
 * 0x7500C79

 * 
 * Ped: The ped to warp.
 * vehicle: The vehicle to warp the ped into.
 * Seat_Index: [-1 is driver seat, -2 first free passenger seat]
 * 
 * Moreinfo of Seat Index
 * DriverSeat = -1
 * Passenger = 0
 * Left Rear = 1
 * RightRear = 2
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} seatIndex See eSeatPosition declared in [IS_VEHICLE_SEAT_FREE](\_0x22AC59A870E6A669). 2 for the first available seat.
 */
export function setPedIntoVehicle(ped: PedIndex, vehicle: VehicleIndex, seatIndex: number): void {
	const setPedIntoVehicle_result = Citizen.invokeNative<void>('0x7500C79', ped, vehicle, seatIndex);
	return setPedIntoVehicle_result;
}