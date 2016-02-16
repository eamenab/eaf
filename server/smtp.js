Meteor.startup(function(){
	process.env.MAIL_URL = 'smtp://ernesto@amenabargroup.com:'+EMAIL_PASS+'@smtp.domain.com:465/'
});