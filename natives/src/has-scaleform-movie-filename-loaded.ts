/**
 * GRAPHICS:HAS_SCALEFORM_MOVIE_FILENAME_LOADED
 *
 * 0xE47743FF8F06F8C0

 * 
 * to check if a movie has streamed in yet
 * 
 * Only values used in the scripts are:
 * 
 * "heist_mp"
 * "heistmap_mp"
 * "instructional_buttons"
 * "heist_pre"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} filename
 * @returns {boolean}  
 */
export function hasScaleformMovieFilenameLoaded(filename: string): boolean {
	const hasScaleformMovieFilenameLoaded_result = Citizen.invokeNative<boolean>('0xE47743FF8F06F8C0', filename);
	return hasScaleformMovieFilenameLoaded_result;
}