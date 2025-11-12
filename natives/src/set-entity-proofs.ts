import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_PROOFS
 *
 * 0xD0F1DB0E50B367AD

 * 
 * Enable / disable each type of damage.
 * 
 * waterProof is damage related to water not drowning
 * --------------
 * p7 is to to '1' in am_mp_property_ext/int: ENTITY::SET_ENTITY_PROOFS(uParam0->f_19, true, true, true, true, true, true, 1, true);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} bulletProofFlag
 * @param {boolean} flameProofFlag
 * @param {boolean} explosionProofFlag
 * @param {boolean} collisionProofFlag
 * @param {boolean} meleeProofFlag
 * @param {boolean} steamProofFlag
 * @param {boolean} dontResetDamageFlagsOnCleanupMissionState
 * @param {boolean} smokeProofFlag
 */
export function setEntityProofs(entity: EntityIndex, bulletProofFlag: boolean, flameProofFlag: boolean, explosionProofFlag: boolean, collisionProofFlag: boolean, meleeProofFlag: boolean, steamProofFlag: boolean = false, dontResetDamageFlagsOnCleanupMissionState: boolean = false, smokeProofFlag: boolean = false): void {
	const setEntityProofs_result = Citizen.invokeNative<void>('0xD0F1DB0E50B367AD', entity, bulletProofFlag, flameProofFlag, explosionProofFlag, collisionProofFlag, meleeProofFlag, steamProofFlag, dontResetDamageFlagsOnCleanupMissionState, smokeProofFlag);
	return setEntityProofs_result;
}