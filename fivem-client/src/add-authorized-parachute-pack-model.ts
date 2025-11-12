/**
 * CFX:ADD_AUTHORIZED_PARACHUTE_PACK_MODEL
 *
 * 0x2E86DEA5

 * Adds the given model name hash to the list of valid models for the player ped's parachute pack.
 * 
 * ------------------------------------------------------------------
 * @param {number} modelNameHash Name hash of the model to allow to be used for the player ped's parachute pack
 */
export function addAuthorizedParachutePackModel(modelNameHash: number): void {
	const addAuthorizedParachutePackModel_result = Citizen.invokeNative<void>('0x2E86DEA5', modelNameHash);
	return addAuthorizedParachutePackModel_result;
}