// Move between different member profiles
function memberSwitch(section) {
	console.log('running memberSwitch with: '+section)
	$('#'+section).addClass('selected-member').siblings().removeClass('selected-member')

    $('#' + section + '_section').removeClass('hidden fadeOut').addClass('selected-member-desc fadeIn').bind('oanimationend animationend webkitAnimationEnd', function() {
        $('#' + section + '_section').removeClass('fadeIn').siblings().addClass('hidden')
    })
    $('#' + section + '_section').siblings().addClass('fadeOut').removeClass('selected-member-desc')
	$('.absolute-container').height($('.selected-member-desc').outerHeight())
	console.log('finished up with: '+section)
}

// Randomizes member photos
function randomizeMembers(members) {
	var firstMember = ''

	console.log(members, members.length)

	// Everyone do the Durstenfeld Shuffle! (randomize members)
	for (var i = members.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = members[i]
    members[i] = members[j]
    members[j] = temp
  }

	var membersToShuffle = ($('.random-folks').parent('.meet-the-team').length>0) ? 8 : members.length

    // Inserts members into page after randomization
    for (var i = membersToShuffle -1; i >= 0; i--) {
    	var name = members[i]
		var toInsert = '<img src="media/'+name+'.jpg" id="'+name+'" class="member" onclick="memberSwitch(\''+name+'\')" />'
    	if ( i==members.length-1 ) {
    		firstMember = name
    		toInsert = '<img src="media/'+name+'.jpg" id="'+name+'" class="member selected-member" onclick="memberSwitch(\''+name+'\')" />'
    	}
        $('.random-folks').append(toInsert)
    }

    memberSwitch(firstMember)
}

$(document).ready(function() {

	var membersList = [ "ryansexauer", "ryanwong", "alenkim", "alexprice",
						"nolanshapiro", "maxdownie", "danielhollar", "keyanchang",
						"ianwymond", "pranavlodha", "joeyfrelka", "sahilsangani",
						"lenabacon", "oskarhernandez", "nikitaanokhin" ]

	// Navigation
	$('.nav_button').click(function() {
		if (window.innerWidth < 600) {
			$('nav:not(.inline-nav)').addClass('fadeIn').removeClass('fadeOut').toggle()
		}
	})

	$('.close_nav').click(function() {
		$('nav:not(.inline-nav)').addClass('fadeOut').removeClass('fadeIn')

		setTimeout(function() {
			$('nav:not(.inline-nav)').toggle()
		}, 2000)
	})


	// Modals
	$('.launch_modal.call').click(function() {
		$('.blur-container').addClass('fadeIn').removeClass('fadeOut').toggle(true)
		$('.modal.call').addClass('fadeIn').removeClass('fadeOut').toggle(true)
	})
	$('.launch_modal.email').click(function() {
		$('.blur-container').addClass('fadeIn').removeClass('fadeOut').toggle(true)
		$('.modal.email').addClass('fadeIn').removeClass('fadeOut').toggle(true)
	})
	$('.launch_modal.mail').click(function() {
		$('.blur-container').addClass('fadeIn').removeClass('fadeOut').toggle(true)
		$('.modal.mail').addClass('fadeIn').removeClass('fadeOut').toggle(true)
	})
	$('.blur-container').click(function() {
		$('.blur-container').removeClass('fadeIn').addClass('fadeOut').toggle(false)
		$('.modal.call').removeClass('fadeIn').addClass('fadeOut').toggle(false)
		$('.modal.email').removeClass('fadeIn').addClass('fadeOut').toggle(false)
		$('.modal.mail').removeClass('fadeIn').addClass('fadeOut').toggle(false)
	})


	if($('.absolute-container')!==null) {
		$('.absolute-container').height($('.selected-member-desc').outerHeight())
	}

	randomizeMembers(membersList)
})
