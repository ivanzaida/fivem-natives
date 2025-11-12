import { EntityIndex } from '@ivanzaida/structures'

/**
 * SHAPETEST:RELEASE_SCRIPT_GUID_FROM_ENTITY
 *
 * 0x85A06221E981406B

 * 
 * GET_SHAPE_TEST_RESULT and GET_SHAPE_TEST_RESULT_INCLUDING_MATERIAL create a temporary script GUID for the EntityIndex that they return.
 * Call this to free that script GUID.
 * This command won't do anything if it's called on a script-created entity so you shouldn't need to check that yourself before calling this command.
 * 
 * Invalidates the entity handle passed by removing the fwScriptGuid from the entity. This should be used when receiving an ambient entity from shape testing natives, but can also be used for other natives returning an 'irrelevant' entity handle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function releaseScriptGuidFromEntity(entity: EntityIndex): void {
	const releaseScriptGuidFromEntity_result = Citizen.invokeNative<void>('0x85A06221E981406B', entity);
	return releaseScriptGuidFromEntity_result;
}