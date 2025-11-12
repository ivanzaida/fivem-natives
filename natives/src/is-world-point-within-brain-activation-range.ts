/**
 * BRAIN:IS_WORLD_POINT_WITHIN_BRAIN_ACTIVATION_RANGE
 *
 * 0x173751E886F8E9AB

 * 
 * You should call this command within all brain scripts attached to world points.
 * 
 * Gets whether the world point the calling script is registered to is within desired range of the player.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isWorldPointWithinBrainActivationRange(): boolean {
	const isWorldPointWithinBrainActivationRange_result = Citizen.invokeNative<boolean>('0x173751E886F8E9AB', );
	return isWorldPointWithinBrainActivationRange_result;
}