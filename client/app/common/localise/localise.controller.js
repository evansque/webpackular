class LocaliseController {
	constructor($translate){
        this.name = 'localise';
        this.languageSet = [
            {'key':'en','name':'English'},
            {'key':'es','name': 'Español'}
        ];

        $translate.use(this.languageSet[0].key);
        this.selectedLanguage = this.languageSet[0].name;

		this.switchLang = (langKey,langName)=>{
            $translate.use(langKey);
            this.selectedLanguage = langName;
		}
	}
}

export default LocaliseController;