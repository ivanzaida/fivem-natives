import { ModelNames, Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MISC:GET_MODEL_DIMENSIONS
 *
 * 0xC93BAF616F1C680F

 * 
 * Gets the dimensions of a model.
 * 
 * Calculate (maximum - minimum) to get the size, in which case, Y will be how long the model is.
 * 
 * Example from the scripts: MISC::GET_MODEL_DIMENSIONS(ENTITY::GET_ENTITY_MODEL(PLAYER::PLAYER_PED_ID()), &v_1A, &v_17);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHashKey
 * @param {Vector3} outMin [Ref]
 * @param {Vector3} outMax [Ref]
 */
export function getModelDimensions(modelHashKey: ModelNames, outMin: Vector3 /* ptr */, outMax: Vector3 /* ptr */): void {
	const outMinPtr = new Vector3Ref();
	const outMaxPtr = new Vector3Ref();
	const getModelDimensions_result = Citizen.invokeNative<void>('0xC93BAF616F1C680F', modelHashKey, outMinPtr.dataView, outMaxPtr.dataView);
	outMinPtr.copyToVector(outMin);
	outMaxPtr.copyToVector(outMax);
	return getModelDimensions_result;
}