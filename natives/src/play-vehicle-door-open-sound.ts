import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_VEHICLE_DOOR_OPEN_SOUND
 *
 * 0x8093F3812E836BCF

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {number} door
 */
export function playVehicleDoorOpenSound(veh: VehicleIndex, door: number): void {
	const playVehicleDoorOpenSound_result = Citizen.invokeNative<void>('0x8093F3812E836BCF', veh, door);
	return playVehicleDoorOpenSound_result;
}