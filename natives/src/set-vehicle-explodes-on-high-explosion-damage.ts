import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_EXPLODES_ON_HIGH_EXPLOSION_DAMAGE
 *
 * 0xB57A96BF24464D21

 * 
 * Sets a vehicle to be strongly resistant to explosions. p0 is the vehicle; set p1 to false to toggle the effect on/off.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} set
 */
export function setVehicleExplodesOnHighExplosionDamage(vehicle: VehicleIndex, set: boolean): void {
	const setVehicleExplodesOnHighExplosionDamage_result = Citizen.invokeNative<void>('0xB57A96BF24464D21', vehicle, set);
	return setVehicleExplodesOnHighExplosionDamage_result;
}