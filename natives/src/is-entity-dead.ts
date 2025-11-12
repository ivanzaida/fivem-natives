import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_DEAD
 *
 * 0x1C2F771CDC87A3A5

 * 
 * If the enitiy you are checking is a ped, do not use this check if you are going to give the ped a task.
 * Unless you specifially need to know they are dead use IS_PED_INJURED instead. It will also return true if they are dead.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} ignoreVehicleDrowningIfInvincible
 * @returns {boolean}  
 */
export function isEntityDead(entity: EntityIndex, ignoreVehicleDrowningIfInvincible: boolean = false): boolean {
	const isEntityDead_result = Citizen.invokeNative<boolean>('0x1C2F771CDC87A3A5', entity, ignoreVehicleDrowningIfInvincible);
	return isEntityDead_result;
}