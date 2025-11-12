import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SHUFFLE_TO_NEXT_VEHICLE_SEAT
 *
 * 0x7A55A25242FBE562

 * 
 * Makes the specified ped shuffle to the next vehicle seat.
 * The ped MUST be in a vehicle and the vehicle parameter MUST be the ped's current vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {boolean} useAlternateShuffle Will lookup and use 'ShuffleLink2' defined in the vehicle layout, rather than the default shuffle link
 */
export function taskShuffleToNextVehicleSeat(ped: PedIndex, vehicle: VehicleIndex, useAlternateShuffle: boolean = false): void {
	const taskShuffleToNextVehicleSeat_result = Citizen.invokeNative<void>('0x7A55A25242FBE562', ped, vehicle, useAlternateShuffle);
	return taskShuffleToNextVehicleSeat_result;
}