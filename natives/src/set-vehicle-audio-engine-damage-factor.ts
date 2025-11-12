import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEHICLE_AUDIO_ENGINE_DAMAGE_FACTOR
 *
 * 0x0BA0348CAAB53EC0

 * 
 * Set the audio engine damage factor that this vehicle should use (0.0 = fine, 1.0 = fully damaged). This will trigger general engine
 * damage loops, engine knocking sounds, and random fanbelt squealing
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} damageFactor
 */
export function setVehicleAudioEngineDamageFactor(vehicle: VehicleIndex, damageFactor: number): void {
	const setVehicleAudioEngineDamageFactor_result = Citizen.invokeNative<void>('0x0BA0348CAAB53EC0', vehicle, damageFactor);
	return setVehicleAudioEngineDamageFactor_result;
}