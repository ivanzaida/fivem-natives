import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ATTACH_SYNCHRONISED_SCENE_TO_ENTITY
 *
 * 0x5B2134752B0D9E36

 * 
 * ------------------------------------------------------------------
 * @param {number} networkSceneID
 * @param {EntityIndex} entity
 * @param {number} bone
 */
export function networkAttachSynchronisedSceneToEntity(networkSceneID: number, entity: EntityIndex, bone: number): void {
	const networkAttachSynchronisedSceneToEntity_result = Citizen.invokeNative<void>('0x5B2134752B0D9E36', networkSceneID, entity, bone);
	return networkAttachSynchronisedSceneToEntity_result;
}