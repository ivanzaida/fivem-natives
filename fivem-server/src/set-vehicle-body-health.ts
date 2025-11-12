import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_BODY_HEALTH
 *
 * 0x920C2517

 * 
 * 1000.0 = full,  0.0 = damaged
 * When body health drops to 0, the vehicle is very vulnerable to damage
 * 
 * p2 often set to 1000.0 in the decompiled scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} value
 */
export function setVehicleBodyHealth(vehicle: VehicleIndex, value: number): void {
	const setVehicleBodyHealth_result = Citizen.invokeNative<void>('0x920C2517', vehicle, value);
	return setVehicleBodyHealth_result;
}