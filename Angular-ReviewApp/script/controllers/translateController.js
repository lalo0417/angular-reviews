angular.module('reviewApp', ['pascalprecht.translate', 'angularUtils.directives.dirPagination', 'angularMoment'])

.config(function ($translateProvider) {
	$translateProvider.translations('en', {
		TITLE: 'Angular Reviews',
		NICKNAME: 'Nickname: ',
		REVIEW: 'Review: ',
		BUTTON_LANG_EN: 'English',
		BUTTON_LANG_FR: 'French',
		BUTTON_SUBMIT: 'Submit',
		SWITCH_LANGUAGE: 'Switch language',
		SELECT_LANGUAGE: 'Select a language',
		CURRENT_LANGUAGE: 'English',
		CREATED_ASC: 'Newest First',
		CREATED_DSC: 'Oldest First'
	});
	$translateProvider.translations('fr', {
		TITLE: 'Revue Angular',
		NICKNAME: 'Surnom: ',
		REVIEW: 'Revue: ',
		BUTTON_LANG_EN: 'Anglais',
		BUTTON_LANG_FR: 'Français',
		BUTTON_SUBMIT: 'Soumettre',
		SWITCH_LANGUAGE: 'Changer la langue',
		SELECT_LANGUAGE: 'Choisissez une langue',
		CURRENT_LANGUAGE: 'Français',
		CREATED_ASC: 'Nouvelle Revue',
		CREATED_DSC: 'Vieille Revue'
	});
	if (localStorage.getItem("prefLang") == "undefined") {
		$translateProvider.preferredLanguage('en');
	} else {
		$translateProvider.preferredLanguage(localStorage.getItem("prefLang"));
	}

})

.controller('Ctrl', function ($scope, $translate) {

	$scope.shouldShow = localStorage.getItem("shouldShow");

	$scope.changeLanguage = function (key) {
		$translate.use(key);
		localStorage.setItem("prefLang", key);
		$scope.shouldShow = false;
	};
	$scope.switchLanguage = function () {
		$scope.shouldShow = true;
	};

});