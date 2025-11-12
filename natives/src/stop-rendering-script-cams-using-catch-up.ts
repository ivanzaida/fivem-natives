import { ECamSplineSmoothingFlags, ERenderingOptionFlags } from '@ivanzaida/structures'

/**
 * CAM:STOP_RENDERING_SCRIPT_CAMS_USING_CATCH_UP
 *
 * 0xC289B882CEF4CAC9

 * 
 * The script must have created a camera that can be rendered. Note that rendering is typically not stopped if another script thread still expects it to be active (see bShouldApplyAcrossAllThreads.)
 * 
 * This native makes the gameplay camera zoom into first person/third person with a special effect.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} shouldApplyAcrossAllThreads
 * @param {number} distanceToBlend Overrides the distance over which the catch up blend occurs, if zero is specified, default blend distance will be used.
 * @param {ECamSplineSmoothingFlags} blendType
 * @param {ERenderingOptionFlags} renderingOptions
 */
export function stopRenderingScriptCamsUsingCatchUp(shouldApplyAcrossAllThreads: boolean = false, distanceToBlend: number = 0, blendType: ECamSplineSmoothingFlags | number = 3, renderingOptions: ERenderingOptionFlags | number = 0): void {
	const stopRenderingScriptCamsUsingCatchUp_result = Citizen.invokeNative<void>('0xC289B882CEF4CAC9', shouldApplyAcrossAllThreads, distanceToBlend, blendType, renderingOptions);
	return stopRenderingScriptCamsUsingCatchUp_result;
}