import { VehicleIndex, EAudioVehiclePriority } from '@ivanzaida/structures'

/**
 * AUDIO:SET_AUDIO_VEHICLE_PRIORITY
 *
 * 0xF8B40A38F93CE540

 * 
 * Sets the priority for the given vehicle. This is a hint for the audio system as to what LOD the
 * vehicle should use. 'High' priority will bump up the activation range significantly and prevent it
 * from dropping when the vehicle is not within the view frustrum. 'Max' will attempt to keep the vehicle
 * at maximum LOD regardless of how far it is from the listener or what it is currently doing. Be careful with this!
 * There is a hard limit of 5 simulataneous granular cars (including the player) so we are quite limited on the number
 * we can play at once, so setting vehicles to max priority will reduce the number of engines availble for regular NPC vehicles
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EAudioVehiclePriority} priority
 */
export function setAudioVehiclePriority(vehicle: VehicleIndex, priority: EAudioVehiclePriority | number): void {
	const setAudioVehiclePriority_result = Citizen.invokeNative<void>('0xF8B40A38F93CE540', vehicle, priority);
	return setAudioVehiclePriority_result;
}