import { EntityIndex } from '@ivanzaida/structures'

/**
 * PED:ATTACH_SYNCHRONIZED_SCENE_TO_ENTITY
 *
 * 0x2DCB8CA1FE6895AB

 * 
 * Use this command to attach a synchronized scene to an entity. Once attached, the root of the scene will follow the
 * ped until DETACH_SYNCHRONIZED_SCENE is called. When attached, the scene's origin becomes an offset from the parent object.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @param {EntityIndex} entity
 * @param {number} bone
 */
export function attachSynchronizedSceneToEntity(sceneID: number, entity: EntityIndex, bone: number): void {
	const attachSynchronizedSceneToEntity_result = Citizen.invokeNative<void>('0x2DCB8CA1FE6895AB', sceneID, entity, bone);
	return attachSynchronizedSceneToEntity_result;
}