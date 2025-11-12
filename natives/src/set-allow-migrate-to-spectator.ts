import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ALLOW_MIGRATE_TO_SPECTATOR
 *
 * 0xAD93DB374DA8B3C7

 * 
 * Set Ignore CanAcceptControl flag on physical entity
 * 
 * p1 is always set to 1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} ignoreCanAccept
 */
export function setAllowMigrateToSpectator(entity: EntityIndex, ignoreCanAccept: boolean): void {
	const setAllowMigrateToSpectator_result = Citizen.invokeNative<void>('0xAD93DB374DA8B3C7', entity, ignoreCanAccept);
	return setAllowMigrateToSpectator_result;
}