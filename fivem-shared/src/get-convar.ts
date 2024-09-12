/**
 * CFX:GET_CONVAR
 *
 * 0X6CCD2564

 * Can be used to get a console variable of type `char`, for example a string.
 * 
 * ------------------------------------------------------------------
 * @param {string} varName The console variable to look up.
 * @param {string} default_ The default value to set if none is found.
 * @returns {string}  Returns the convar value if it can be found, otherwise it returns the assigned `default`.
 */
export function getConvar(varName: string, default_: string): string {
	const getConvar_result = Citizen.invokeNative<string>('0X6CCD2564', varName, default_);
	return getConvar_result;
}