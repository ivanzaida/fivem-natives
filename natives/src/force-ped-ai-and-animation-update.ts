import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:FORCE_PED_AI_AND_ANIMATION_UPDATE
 *
 * 0xD8ED11B32DF72E0B

 * 
 * Forces a late AI and animation update, to be used only when warping a character and/or
 * instantly changing animation state.
 * this is an expensive command - please speak to AI before using
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} forceAIPreCameraUpdate Forces the ai update to be done before the camera update, only set to TRUE if code have told you to
 * @param {boolean} forceZeroTimestep
 */
export function forcePedAiAndAnimationUpdate(ped: PedIndex, forceAIPreCameraUpdate: boolean = false, forceZeroTimestep: boolean = false): void {
	const forcePedAiAndAnimationUpdate_result = Citizen.invokeNative<void>('0xD8ED11B32DF72E0B', ped, forceAIPreCameraUpdate, forceZeroTimestep);
	return forcePedAiAndAnimationUpdate_result;
}