/**
 * GRAPHICS:BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND_HEADER
 *
 * 0x23F66A35FFBE3FFA

 * 
 * start of an actionscript method called on the main menu header movie
 * 
 * Starts frontend (pause menu) scaleform movie methods for header options.
 * Use `BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND` to customize the content inside the frontend menus.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} methodName
 * @returns {boolean}  
 */
export function beginScaleformMovieMethodOnFrontendHeader(methodName: string): boolean {
	const beginScaleformMovieMethodOnFrontendHeader_result = Citizen.invokeNative<boolean>('0x23F66A35FFBE3FFA', methodName);
	return beginScaleformMovieMethodOnFrontendHeader_result;
}