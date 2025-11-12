import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ENGINE_HEALTH
 *
 * 0x2AEBE39F6BF7D6BC

 * 
 * 1000.0 = full,  0.0 = go on fire,  -1000.0 = burnt out
 * 
 * 1000 is max health
 * Begins leaking gas at around 650 health
 * Minimum: -4000
 * Maximum: 1000
 * 
 * -4000: Engine is destroyed
 * 0 and below: Engine catches fire and health rapidly declines
 * 300: Engine is smoking and losing functionality
 * 1000: Engine is perfect
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} health
 */
export function setVehicleEngineHealth(vehicle: VehicleIndex, health: number): void {
	const setVehicleEngineHealth_result = Citizen.invokeNative<void>('0x2AEBE39F6BF7D6BC', vehicle, health);
	return setVehicleEngineHealth_result;
}