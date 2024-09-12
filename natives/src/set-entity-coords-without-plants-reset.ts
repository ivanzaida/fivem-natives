import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_COORDS_WITHOUT_PLANTS_RESET
 *
 * 0x4FFCA145489D86B7

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {boolean} doDeadCheck
 * @param {boolean} keepTasks
 * @param {boolean} keepIK
 * @param {boolean} doWarp
 */
export function setEntityCoordsWithoutPlantsReset(entity: EntityIndex, newCoorsX: number, newCoorsY: number, newCoorsZ: number, doDeadCheck: boolean = true, keepTasks: boolean = false, keepIK: boolean = false, doWarp: boolean = true): void {
	const setEntityCoordsWithoutPlantsReset_result = Citizen.invokeNative<void>('0x4FFCA145489D86B7', entity, newCoorsX, newCoorsY, newCoorsZ, doDeadCheck, keepTasks, keepIK, doWarp);
	return setEntityCoordsWithoutPlantsReset_result;
}