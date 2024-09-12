import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_CAN_ONLY_BE_DAMAGED_BY_SCRIPT_PARTICIPANTS
 *
 * 0x8FEAF7F0538CEF55

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} onlyDamagedWhenRunningScript
 */
export function setEntityCanOnlyBeDamagedByScriptParticipants(entity: EntityIndex, onlyDamagedWhenRunningScript: boolean): void {
	const setEntityCanOnlyBeDamagedByScriptParticipants_result = Citizen.invokeNative<void>('0x8FEAF7F0538CEF55', entity, onlyDamagedWhenRunningScript);
	return setEntityCanOnlyBeDamagedByScriptParticipants_result;
}