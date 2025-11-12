import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_ENTITY_BEEN_DAMAGED_BY_ENTITY
 *
 * 0x9B3D4335E0EDB0BE

 * 
 * Returns TRUE if the last thing to damage the given entity was the given damager entity.
 * Will also return true if the damager entity is in a vehicle that damages the
 * first entity but only if CheckDamagerVehicle is left TRUE
 * 
 * Entity 1 = Victim
 * Entity 2 = Attacker
 * 
 * p2 seems to always be 1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {EntityIndex} damager
 * @param {boolean} checkDamagerVehicle
 * @returns {boolean}  
 */
export function hasEntityBeenDamagedByEntity(entity: EntityIndex, damager: EntityIndex, checkDamagerVehicle: boolean = true): boolean {
	const hasEntityBeenDamagedByEntity_result = Citizen.invokeNative<boolean>('0x9B3D4335E0EDB0BE', entity, damager, checkDamagerVehicle);
	return hasEntityBeenDamagedByEntity_result;
}