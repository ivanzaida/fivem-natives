import { ModelNames } from '@ivanzaida/structures'

/**
 * CUTSCENE:SET_VEHICLE_MODEL_PLAYER_WILL_EXIT_SCENE
 *
 * 0x256C30FDAB915E2B

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} model
 */
export function setVehicleModelPlayerWillExitScene(model: ModelNames): void {
	const setVehicleModelPlayerWillExitScene_result = Citizen.invokeNative<void>('0x256C30FDAB915E2B', model);
	return setVehicleModelPlayerWillExitScene_result;
}