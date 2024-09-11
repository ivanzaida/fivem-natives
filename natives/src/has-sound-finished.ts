/**
 * AUDIO:HAS_SOUND_FINISHED
 *
 * 0x9F0C06CFBACDD6A1

 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 * @returns {boolean}  
 */
export function hasSoundFinished(soundId: number): boolean {
	const hasSoundFinished_result = Citizen.invokeNative<boolean>('0x9F0C06CFBACDD6A1', soundId);
	return hasSoundFinished_result;
}