/**
 * SOCIALCLUB:SC_EMAIL_SET_CURRENT_EMAIL_TAG
 *
 * 0xED8D0AF79CFA040D

 * Sets current 'tag' used for email messages. You can set these tags - {"gta5email", "gta5mkt_en", "gta5mkt_fr", "gta5mkt_ge", "gta5mkt_it", "gta5mkt_sp", "gta5mkt_pt", "gta5mkt_pl", "gta5mkt_ru", "gta5mkt_ko", "gta5mkt_ch", "gta5mkt_ja", "gta5mkt_me", "gta5mkt_cn"} -.
 * By default the system will reset the current email tag to "gta5email" when you call SC_EMAIL_RETRIEVE_EMAILS for the cases
 * You forget to do it. So your code should always have something like this when you want to retrieve marketing messages:
 * SC_EMAIL_SET_CURRENT_EMAIL_TAG("gta5mkt_en" | "gta5mkt_fr" | "gta5mkt_ge", etc ...)
 * SC_EMAIL_RETRIEVE_EMAILS(...) ==> this way you dont need to worry about if you are using the correct tag or not.
 * 
 * ------------------------------------------------------------------
 * @param {string} tag
 * @returns {boolean}  
 */
export function scEmailSetCurrentEmailTag(tag: string): boolean {
	const scEmailSetCurrentEmailTag_result = Citizen.invokeNative<boolean>('0xED8D0AF79CFA040D', tag);
	return scEmailSetCurrentEmailTag_result;
}