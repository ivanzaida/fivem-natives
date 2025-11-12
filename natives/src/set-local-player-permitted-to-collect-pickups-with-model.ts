import { ModelNames } from '@ivanzaida/structures'

/**
 * OBJECT:SET_LOCAL_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_WITH_MODEL
 *
 * 0xFE931774D31D4525

 * 
 * Maximum amount of pickup models that can be disallowed is 30.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} customModel
 * @param {boolean} allow
 */
export function setLocalPlayerPermittedToCollectPickupsWithModel(customModel: ModelNames, allow: boolean): void {
	const setLocalPlayerPermittedToCollectPickupsWithModel_result = Citizen.invokeNative<void>('0xFE931774D31D4525', customModel, allow);
	return setLocalPlayerPermittedToCollectPickupsWithModel_result;
}