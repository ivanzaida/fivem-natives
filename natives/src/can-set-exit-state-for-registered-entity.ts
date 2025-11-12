import { ModelNames } from '@ivanzaida/structures'

/**
 * CUTSCENE:CAN_SET_EXIT_STATE_FOR_REGISTERED_ENTITY
 *
 * 0xD8FC13DA1BA1DBA2

 * 
 * Only need to pass the model in if the scene has both an IG_ and CS_ version of the same model, which will be swapped
 * for a seamless exit ie the peds remain on screen at the end.
 * Allows the entites state to be set in the final frame of the cutscene.
 * Typically this will be for giving the ped a task that will match the final state of the cut scene. e.g.
 * If the ped exits in cover in the cutscene then you can use SET_PED_DIRECTLY_INTO_COVER when this returns true so that peds
 * new task matches the exit state of the scene.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneName
 * @param {ModelNames} model
 * @returns {boolean}  
 */
export function canSetExitStateForRegisteredEntity(sceneName: string, model: ModelNames = 0): boolean {
	const canSetExitStateForRegisteredEntity_result = Citizen.invokeNative<boolean>('0xD8FC13DA1BA1DBA2', sceneName, model);
	return canSetExitStateForRegisteredEntity_result;
}