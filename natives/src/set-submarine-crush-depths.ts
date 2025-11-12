import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_SUBMARINE_CRUSH_DEPTHS
 *
 * 0xA324C32992621FA4

 * 
 * Needs to be called every frame or it will be reset to the current global defaults.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enableCrushDamage
 * @param {number} visibleDamageDepth
 * @param {number} airLeakDepth
 * @param {number} crushDepth
 */
export function setSubmarineCrushDepths(vehicle: VehicleIndex, enableCrushDamage: boolean, visibleDamageDepth: number, airLeakDepth: number, crushDepth: number): void {
	const setSubmarineCrushDepths_result = Citizen.invokeNative<void>('0xA324C32992621FA4', vehicle, enableCrushDamage, visibleDamageDepth, airLeakDepth, crushDepth);
	return setSubmarineCrushDepths_result;
}