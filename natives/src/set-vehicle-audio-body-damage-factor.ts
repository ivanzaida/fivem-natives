import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEHICLE_AUDIO_BODY_DAMAGE_FACTOR
 *
 * 0x45FFAC45E551D308

 * 
 * Set the audio body damage percentage that this vehicle should use (0.0 = fine, 1.0 = fully damaged). This will trigger debris sounds on
 * jump landings, exhaust rattle when coming off the throttle, and louder suspension sounds
 * 
 * intensity: 0.0f - 1.0f, only used once with 1.0f in R Scripts (nigel2)
 * Makes an engine rattling noise when you decelerate, you need to be going faster to hear lower values
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} damageFactor
 */
export function setVehicleAudioBodyDamageFactor(vehicle: VehicleIndex, damageFactor: number): void {
	const setVehicleAudioBodyDamageFactor_result = Citizen.invokeNative<void>('0x45FFAC45E551D308', vehicle, damageFactor);
	return setVehicleAudioBodyDamageFactor_result;
}