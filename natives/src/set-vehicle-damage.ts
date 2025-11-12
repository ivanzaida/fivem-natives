import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DAMAGE
 *
 * 0x2BDD547718FF1F1A

 * 
 * Ths only deforms the car and does not knock off doors etc. the values paassed in to damage and deformation are direct forces.
 * 
 * Apply damage to vehicle at a location. Location is relative to vehicle model (not world).
 * 
 * Radius of effect damage applied in a sphere at impact location
 * When `focusOnModel` set to `true`, the damage sphere will travel towards the vehicle from the given point, thus guaranteeing an impact
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train
 * @param {number} damageCoorsX
 * @param {number} damageCoorsY
 * @param {number} damageCoorsZ
 * @param {number} damage
 * @param {number} deformation
 * @param {boolean} localDamage
 */
export function setVehicleDamage(train: VehicleIndex, damageCoorsX: number, damageCoorsY: number, damageCoorsZ: number, damage: number, deformation: number, localDamage: boolean): void {
	const setVehicleDamage_result = Citizen.invokeNative<void>('0x2BDD547718FF1F1A', train, damageCoorsX, damageCoorsY, damageCoorsZ, damage, deformation, localDamage);
	return setVehicleDamage_result;
}