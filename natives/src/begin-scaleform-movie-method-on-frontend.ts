/**
 * GRAPHICS:BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND
 *
 * 0xF3F7B05FC4684A7C

 * 
 * start of an actionscript method called on the main menu content movie
 * 
 * Starts frontend (pause menu) scaleform movie methods.
 * This can be used when you want to make custom frontend menus, and customize things like images or text in the menus etc.
 * Use `BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND_HEADER` for header scaleform functions.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} methodName
 * @returns {boolean}  
 */
export function beginScaleformMovieMethodOnFrontend(methodName: string): boolean {
	const beginScaleformMovieMethodOnFrontend_result = Citizen.invokeNative<boolean>('0xF3F7B05FC4684A7C', methodName);
	return beginScaleformMovieMethodOnFrontend_result;
}