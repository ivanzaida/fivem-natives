import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_STATIC
 *
 * 0x0D7186810BF44109

 * a static ped will not react to natives like "APPLY_FORCE_TO_ENTITY" or "SET_ENTITY_VELOCITY" and oftentimes will not react to task-natives like "TASK::TASK_COMBAT_PED". The only way I know of to make one of these peds react is to ragdoll them (or sometimes to use CLEAR_PED_TASKS_IMMEDIATELY(). Static peds include almost all far-away peds, beach-combers, peds in certain scenarios, peds crossing a crosswalk, peds walking to get back into their cars, and others. If anyone knows how to make a ped non-static without ragdolling them, please edit this with the solution.
 * how can I make an entity static???
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityStatic(entity: EntityIndex): boolean {
	const isEntityStatic_result = Citizen.invokeNative<boolean>('0x0D7186810BF44109', entity);
	return isEntityStatic_result;
}