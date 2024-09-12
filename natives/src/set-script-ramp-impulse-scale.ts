import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_SCRIPT_RAMP_IMPULSE_SCALE
 *
 * 0xABCBEEA1CC0701DC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} impulseScale
 */
export function setScriptRampImpulseScale(vehicle: VehicleIndex, impulseScale: number): void {
	const setScriptRampImpulseScale_result = Citizen.invokeNative<void>('0xABCBEEA1CC0701DC', vehicle, impulseScale);
	return setScriptRampImpulseScale_result;
}