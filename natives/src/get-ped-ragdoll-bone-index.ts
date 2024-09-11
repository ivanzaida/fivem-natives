import { PedIndex, EPedRagdollComponents } from '@ivanzaida/structures'

/**
 * PED:GET_PED_RAGDOLL_BONE_INDEX
 *
 * 0xA2EFF78CEBC29932

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedRagdollComponents} ragdollComponent
 * @returns {number}  
 */
export function getPedRagdollBoneIndex(ped: PedIndex, ragdollComponent: EPedRagdollComponents | number): number {
	const getPedRagdollBoneIndex_result = Citizen.invokeNative<number>('0xA2EFF78CEBC29932', ped, ragdollComponent);
	return getPedRagdollBoneIndex_result;
}