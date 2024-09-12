import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_BODY_HEALTH
 *
 * 0X920C2517

 * 1000.0 = full,  0.0 = damaged
 * When body health drops to 0, the vehicle is very vulnerable to damage
 * p2 often set to 1000.0 in the decompiled scripts.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} health
 */
export function setVehicleBodyHealth(vehicle: VehicleIndex, health: number): void {
	const setVehicleBodyHealth_result = Citizen.invokeNative<void>('0X920C2517', vehicle, health);
	return setVehicleBodyHealth_result;
}