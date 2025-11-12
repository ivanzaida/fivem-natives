import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_PETROL_TANK_HEALTH
 *
 * 0xDF9DC0584881B7AF

 * 
 * Petrol tank "will" explode when health reaches -1000.0 Petrol tank health will drop if on fire until it explodes
 * 
 * 1000 is max health
 * Begins leaking gas at around 650 health
 * -999.90002441406 appears to be minimum health, although nothing special occurs
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} health
 */
export function setVehiclePetrolTankHealth(vehicle: VehicleIndex, health: number): void {
	const setVehiclePetrolTankHealth_result = Citizen.invokeNative<void>('0xDF9DC0584881B7AF', vehicle, health);
	return setVehiclePetrolTankHealth_result;
}