import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_COMPLETELY_DISABLE_COLLISION
 *
 * 0x52528272B59EBA11

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} usesCollisionsFlag
 * @param {boolean} keepDisabledSimulatingFlag
 */
export function setEntityCompletelyDisableCollision(entity: EntityIndex, usesCollisionsFlag: boolean, keepDisabledSimulatingFlag: boolean = false): void {
	const setEntityCompletelyDisableCollision_result = Citizen.invokeNative<void>('0x52528272B59EBA11', entity, usesCollisionsFlag, keepDisabledSimulatingFlag);
	return setEntityCompletelyDisableCollision_result;
}