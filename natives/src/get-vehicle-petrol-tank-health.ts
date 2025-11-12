import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_PETROL_TANK_HEALTH
 *
 * 0x31B58D7972181BFA

 * 
 * 1000.0 = full,  0.0 = go on fire,  -1000.0 = burnt out
 * Petrol tank "will" explode when health reaches -1000.0
 * Petrol tank health will drop if on fire until it explodes
 * 
 * 1000 is max health
 * Begins leaking gas at around 650 health
 * -999.90002441406 appears to be minimum health, although nothing special occurs
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehiclePetrolTankHealth(vehicle: VehicleIndex): number {
	const getVehiclePetrolTankHealth_result = Citizen.invokeNative<number>('0x31B58D7972181BFA', vehicle);
	return getVehiclePetrolTankHealth_result;
}