/**
 * AUDIO:IS_STREAM_PLAYING
 *
 * 0x3D6F33E7EFD6D669

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isStreamPlaying(): boolean {
	const isStreamPlaying_result = Citizen.invokeNative<boolean>('0x3D6F33E7EFD6D669', );
	return isStreamPlaying_result;
}