Meteor.startup(function(){
	process.env.MAIL_URL = 'smtp://ernesto@amenabargroup.com:'+System.getenv('EMAIL_PASS')+'@smtp.domain.com:465/'
});