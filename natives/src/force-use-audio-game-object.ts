import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:FORCE_USE_AUDIO_GAME_OBJECT
 *
 * 0x4294356B761DCABE

 * 
 * This native sets the audio of the specified vehicle to the audioName (p1).
 * 
 * Use the audioNameHash found in vehicles.meta
 * 
 * Example:
 * _SET_VEHICLE_AUDIO(veh, "ADDER");
 * The selected vehicle will now have the audio of the Adder.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {string} gameObjectName
 */
export function forceUseAudioGameObject(vehicle: VehicleIndex, gameObjectName: string): void {
	const forceUseAudioGameObject_result = Citizen.invokeNative<void>('0x4294356B761DCABE', vehicle, gameObjectName);
	return forceUseAudioGameObject_result;
}