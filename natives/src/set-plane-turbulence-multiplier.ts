import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PLANE_TURBULENCE_MULTIPLIER
 *
 * 0x540E1993D47EAF4B

 * 
 * This native sets the turbulence multiplier. It only works for planes.
 * 0.0 = no turbulence at all.
 * 1.0 = heavy turbulence.
 * Works by just calling it once, does not need to be called every tick.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} val
 */
export function setPlaneTurbulenceMultiplier(vehicle: VehicleIndex, val: number): void {
	const setPlaneTurbulenceMultiplier_result = Citizen.invokeNative<void>('0x540E1993D47EAF4B', vehicle, val);
	return setPlaneTurbulenceMultiplier_result;
}