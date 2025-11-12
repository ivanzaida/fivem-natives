import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_VEHICLE_DOOR_CLOSE_SOUND
 *
 * 0xDCC6C00DE6C4A799

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {number} door
 */
export function playVehicleDoorCloseSound(veh: VehicleIndex, door: number): void {
	const playVehicleDoorCloseSound_result = Citizen.invokeNative<void>('0xDCC6C00DE6C4A799', veh, door);
	return playVehicleDoorCloseSound_result;
}