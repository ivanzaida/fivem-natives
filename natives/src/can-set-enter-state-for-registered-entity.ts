import { ModelNames } from '@ivanzaida/structures'

/**
 * CUTSCENE:CAN_SET_ENTER_STATE_FOR_REGISTERED_ENTITY
 *
 * 0x18C8A35E0901C0E2

 * 
 * Only need to pass the model in if the scene has both an IG_ and CS_ version of the same model
 * 
 * modelHash (p1) was always 0 in R scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneName
 * @param {ModelNames} model
 * @returns {boolean}  
 */
export function canSetEnterStateForRegisteredEntity(sceneName: string, model: ModelNames = 0): boolean {
	const canSetEnterStateForRegisteredEntity_result = Citizen.invokeNative<boolean>('0x18C8A35E0901C0E2', sceneName, model);
	return canSetEnterStateForRegisteredEntity_result;
}