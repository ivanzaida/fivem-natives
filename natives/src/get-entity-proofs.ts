import { EntityIndex, BoolRef } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_PROOFS
 *
 * 0x3A4536D7E89CD377

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {BoolRef} bulletProofFlag [Ref]
 * @param {BoolRef} flameProofFlag [Ref]
 * @param {BoolRef} explosionProofFlag [Ref]
 * @param {BoolRef} collisionProofFlag [Ref]
 * @param {BoolRef} meleeProofFlag [Ref]
 * @param {BoolRef} steamProofFlag [Ref]
 * @param {BoolRef} dontResetDamageFlagsOnCleanupMissionState [Ref]
 * @param {BoolRef} smokeProofFlag [Ref]
 * @returns {boolean}  
 */
export function getEntityProofs(entity: EntityIndex, bulletProofFlag: BoolRef /* ptr */, flameProofFlag: BoolRef /* ptr */, explosionProofFlag: BoolRef /* ptr */, collisionProofFlag: BoolRef /* ptr */, meleeProofFlag: BoolRef /* ptr */, steamProofFlag: BoolRef /* ptr */, dontResetDamageFlagsOnCleanupMissionState: BoolRef /* ptr */, smokeProofFlag: BoolRef /* ptr */): boolean {
	const getEntityProofs_result = Citizen.invokeNative<boolean>('0x3A4536D7E89CD377', entity, bulletProofFlag.dataView, flameProofFlag.dataView, explosionProofFlag.dataView, collisionProofFlag.dataView, meleeProofFlag.dataView, steamProofFlag.dataView, dontResetDamageFlagsOnCleanupMissionState.dataView, smokeProofFlag.dataView);
	return getEntityProofs_result;
}