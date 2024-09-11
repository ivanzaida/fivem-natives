import { EntityIndex, ECutsceneUsage, ModelNames, ECutsceneEntityOptionFlags } from '@ivanzaida/structures'

/**
 * CUTSCENE:REGISTER_ENTITY_FOR_CUTSCENE
 *
 * 0xF293D66D4452C854

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} sceneHandle
 * @param {ECutsceneUsage} usage
 * @param {ModelNames} model
 * @param {ECutsceneEntityOptionFlags} options
 */
export function registerEntityForCutscene(entity: EntityIndex, sceneHandle: string, usage: ECutsceneUsage | number, model: ModelNames = 0, options: ECutsceneEntityOptionFlags | number = 0): void {
	const registerEntityForCutscene_result = Citizen.invokeNative<void>('0xF293D66D4452C854', entity, sceneHandle, usage, model, options);
	return registerEntityForCutscene_result;
}