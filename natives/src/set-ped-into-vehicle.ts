import { PedIndex, VehicleIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * PED:SET_PED_INTO_VEHICLE
 *
 * 0x73CAFD2038E812B3

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
 * @param {EVehicleSeat} seat
 */
export function setPedIntoVehicle(ped: PedIndex, vehicle: VehicleIndex, seat: EVehicleSeat | number = 1): void {
	const setPedIntoVehicle_result = Citizen.invokeNative<void>('0x73CAFD2038E812B3', ped, vehicle, seat);
	return setPedIntoVehicle_result;
}