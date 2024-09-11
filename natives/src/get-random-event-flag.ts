/**
 * MISC:GET_RANDOM_EVENT_FLAG
 *
 * 0x9FA91AA1AC724CD0

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getRandomEventFlag(): boolean {
	const getRandomEventFlag_result = Citizen.invokeNative<boolean>('0x9FA91AA1AC724CD0', );
	return getRandomEventFlag_result;
}