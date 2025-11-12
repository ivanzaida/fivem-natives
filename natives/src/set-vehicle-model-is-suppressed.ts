import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_MODEL_IS_SUPPRESSED
 *
 * 0xCCA6D8A84EE8C88A

 * 
 * Makes the vehicle stop spawning naturally in traffic. Here's an essential example:
 * 
 * VEHICLE::SET_VEHICLE_MODEL_IS_SUPPRESSED(MISC::GET_HASH_KEY("taco"), true);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @param {boolean} isSuppressed
 */
export function setVehicleModelIsSuppressed(vehicleModelHashKey: ModelNames, isSuppressed: boolean): void {
	const setVehicleModelIsSuppressed_result = Citizen.invokeNative<void>('0xCCA6D8A84EE8C88A', vehicleModelHashKey, isSuppressed);
	return setVehicleModelIsSuppressed_result;
}