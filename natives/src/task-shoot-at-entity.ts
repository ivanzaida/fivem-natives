import { PedIndex, EntityIndex, EFiringType } from '@ivanzaida/structures'

/**
 * TASK:TASK_SHOOT_AT_ENTITY
 *
 * 0xE84EF4129A44CCA3

 * 
 * If -1 is passed to Time the ped will never give up on the task.
 * 
 * //this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
 * Entity aimedentity;
 * Player player = PLAYER::PLAYER_ID();
 * PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);
 * 
 * //bg is an array of peds
 * TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));
 * 
 * in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
 * 
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @param {number} time
 * @param {EFiringType} firingType
 */
export function taskShootAtEntity(ped: PedIndex, entity: EntityIndex, time: number, firingType: EFiringType | number): void {
	const taskShootAtEntity_result = Citizen.invokeNative<void>('0xE84EF4129A44CCA3', ped, entity, time, firingType);
	return taskShootAtEntity_result;
}