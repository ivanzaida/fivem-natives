import { PedIndex, VehicleIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * PED:SET_PED_VEHICLE_FORCED_SEAT_USAGE
 *
 * 0xFD763E094E35D34A

 * 
 * Force a ped to use front or rear seats for a particular vehicle, if no vehicle is specified, it is assumed this is to be applied for any vehicle
 * this has the potential to cause conflicts with other slots, if wanting to apply a setting for all vehicles, script should call CLEAR_ALL_PED_VEHICLE_FORCED_SEAT_USAGE
 * beforehand
 * 
 * seatIndex must be <= 2
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} slot
 * @param {number} flags
 * @param {EVehicleSeat} seat
 */
export function setPedVehicleForcedSeatUsage(ped: PedIndex, vehicle: VehicleIndex, slot: number, flags: number, seat: EVehicleSeat | number = 2): void {
	const setPedVehicleForcedSeatUsage_result = Citizen.invokeNative<void>('0xFD763E094E35D34A', ped, vehicle, slot, flags, seat);
	return setPedVehicleForcedSeatUsage_result;
}