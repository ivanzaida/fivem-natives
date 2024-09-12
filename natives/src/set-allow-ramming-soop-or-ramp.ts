import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_ALLOW_RAMMING_SOOP_OR_RAMP
 *
 * 0xF977D20CFFFD341F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} allowed
 */
export function setAllowRammingSoopOrRamp(vehicle: VehicleIndex, allowed: boolean): void {
	const setAllowRammingSoopOrRamp_result = Citizen.invokeNative<void>('0xF977D20CFFFD341F', vehicle, allowed);
	return setAllowRammingSoopOrRamp_result;
}