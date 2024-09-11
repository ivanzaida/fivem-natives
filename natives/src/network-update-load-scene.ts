/**
 * STREAMING:NETWORK_UPDATE_LOAD_SCENE
 *
 * 0xD87B2B089732DAFC

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkUpdateLoadScene(): boolean {
	const networkUpdateLoadScene_result = Citizen.invokeNative<boolean>('0xD87B2B089732DAFC', );
	return networkUpdateLoadScene_result;
}