import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_COLLISION
 *
 * 0x44C48AC14D3C09ED

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} usesCollisionsFlag
 * @param {boolean} keepDisabledSimulatingFlag
 */
export function setEntityCollision(entity: EntityIndex, usesCollisionsFlag: boolean, keepDisabledSimulatingFlag: boolean = false): void {
	const setEntityCollision_result = Citizen.invokeNative<void>('0x44C48AC14D3C09ED', entity, usesCollisionsFlag, keepDisabledSimulatingFlag);
	return setEntityCollision_result;
}